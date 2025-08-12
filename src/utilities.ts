/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Copyright 2025 Scott Bender <scott@scottbender.net>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import camelCase from 'camelcase'
import {
  PGN,
  createPGN,
  N2K_Variable,
  N2K_FieldIndex,
  PGN_126208_NmeaRequestGroupFunction,
  PGN_126208_NmeaCommandGroupFunction,
  PGN_126208_NmeaAcknowledgeGroupFunction,
  PGN_126208_NmeaReadFieldsGroupFunction,
  PGN_126208_NmeaReadFieldsReplyGroupFunction,
  PGN_126208_NmeaWriteFieldsGroupFunction,
  PGN_126208_NmeaWriteFieldsReplyGroupFunction
} from './pgns'
import { GroupFunction } from './enums'
import canboat from '../canboat.json'
import { fixIdentifier } from './internals'
import {
  Field,
  Definition,
  Enumeration,
  BitEnumeration,
  FieldTypeEnumeration
} from './definition'
import { satisfies } from 'semver'

/**
 * @category PGN Definition Access
 */
export const getAllPGNs = (): Definition[] => {
  const all: Definition[] = canboat.PGNs as Definition[]
  return all
}

/**
 * @category PGN Definition Editing
 */

export const updatePGN = (updatedDefinition: Definition) => {
  for (const definition of getAllPGNs()) {
    if (definition.Id === updatedDefinition.Id) {
      Object.assign(definition, updatedDefinition)
      return
    }
  }
  pgnNumberMap = undefined
  canboat.PGNs.push(updatedDefinition as any)
}

let pgnNumberMap: { [key: number]: Definition[] } | undefined

const getPGNNumberMap = () => {
  if (pgnNumberMap === undefined) {
    const res: { [key: number]: Definition[] } = {}

    getAllPGNs().forEach((pgn) => {
      if (!res[pgn.PGN]) {
        res[pgn.PGN] = []
      }
      res[pgn.PGN].push(pgn)

      let reservedCount = 1
      pgn.Fields.forEach((field) => {
        if (field.Name === 'Reserved') {
          field.Name = `Reserved${reservedCount++}`
        }
      })
    })
    pgnNumberMap = res
  }

  return pgnNumberMap
}

let pgnIdMap: { [key: string]: Definition }

const getPGNIdMap = () => {
  if (pgnIdMap === undefined) {
    const res: { [key: string]: Definition } = {}

    getAllPGNs().forEach((pgn) => {
      res[pgn.Id] = pgn

      let reservedCount = 1
      pgn.Fields.forEach((field) => {
        if (field.Name === 'Reserved') {
          field.Name = `Reserved${reservedCount++}`
        }
      })
    })
    pgnIdMap = res
  }

  return pgnIdMap
}

/**
 * Retrieves the PGN definitions associated with a given number.
 *
 * @param num - The number used to look up PGN definitions.
 * @returns An array of `Definition` objects if found, or `undefined` if no definitions exist for the provided number.
 * @category PGN Definition Access
 */
export const getPGNWithNumber = (num: number): Definition[] | undefined => {
  return getPGNNumberMap()[num]
}

/**
 * Retrieves a PGN definition by its unique identifier.
 *
 * @param id - The unique identifier of the PGN definition to retrieve.
 * @returns The corresponding {@link Definition} object if found; otherwise, `undefined`.
 * @category PGN Definition Access
 */
export const getPGNWithId = (id: string): Definition | undefined => {
  return getPGNIdMap()[id]
}

/**
 * Determines whether a given PGN object matches all specified fields.
 *
 * @param pgn - The PGN object to check, expected to have a `fields` property.
 * @param matchFields - An object containing key-value pairs to match against `pgn.fields`.
 * @returns `true` if all keys in `matchFields` exist in `pgn.fields` and have equal values; otherwise, `false`.
 * @category Utilities
 */
export const isMatch = (pgn: any, matchFields: any) => {
  return !Object.keys(matchFields).some((key: string) => {
    return pgn.fields === undefined || pgn.fields[key] !== matchFields[key]
  })
}

/**
 * Maps the keys of a PGN object to camelCase names based on its definition.
 *
 * This function transforms the keys of the provided PGN object by looking up a matching definition,
 * and then mapping field IDs to their corresponding camelCase field names. It handles both regular
 * and repeating fields, and supports PGN objects with or without a `fields` property.
 *
 * @param pgn - The PGN object to map.
 * @returns An object with keys mapped to camelCase field names, including nested fields and repeating field sets.
 * @throws If no matching definition is found for the provided PGN object.
 * @category Utilities
 */
export const mapCamelCaseKeys = (pgn: PGN) => {
  const def = findMatchingDefinition(pgn)

  if (def === undefined) {
    throw Error(`can't find matching pgn`)
  }

  const res: any = {}

  if (pgn.fields !== undefined) {
    res.fields = {}
  }

  Object.keys(pgn).forEach((key) => {
    if (key !== 'fields') {
      res[key] = (pgn as any)[key]
    }
  })

  const repeatingSize = def.RepeatingFieldSet1Size || 0

  for (let i = 0; i < def.Fields.length - repeatingSize; i++) {
    const field = def.Fields[i]
    const value =
      pgn.fields !== undefined
        ? (pgn.fields as any)[field.Id]
        : (pgn as any)[field.Id]

    if (value !== undefined) {
      if (pgn.fields !== undefined) {
        ;(res.fields as any)[field.Name] = value
      } else {
        ;(res as any)[field.Name] = value
      }
    }
  }

  const list =
    pgn.fields !== undefined ? (pgn.fields as any).list : (pgn as any).list

  if (repeatingSize > 0 && list !== undefined && list.length > 0) {
    const repeating: Field[] = (def.Fields as any).slice(
      def.Fields.length - repeatingSize
    )

    const dest: any = pgn.fields !== undefined ? res.fields : res

    if (dest.list === undefined) {
      dest.list = []
    }

    list.forEach((item: any) => {
      const copy: { [key: string]: any } = {}
      dest.list.push(copy)
      repeating.forEach((field) => {
        const value = item[field.Id]

        if (value !== undefined) {
          copy[field.Name] = value
        }
      })
    })
  }
  return res
}

/**
 * Maps the keys of a PGN object from their original names to camelCase IDs as defined in a matching definition.
 *
 * This function searches for a matching definition for the provided PGN object, creates a new PGN structure,
 * and copies over non-field properties. It then maps field values from their original names to their corresponding
 * IDs, including handling repeating field sets if present.
 *
 * @param pgn - The PGN object to be transformed.
 * @returns A new PGN object with keys mapped to camelCase IDs.
 * @throws If no matching definition is found for the provided PGN object.
 * @category Utilities
 */
export const mapNameKeysToCamelCase = (pgn: any) => {
  const def = findMatchingDefinition(pgn)

  if (def === undefined) {
    throw Error(`can't find matching pgn`)
  }

  const res = createPGN(def.Id, {})!

  Object.keys(pgn).forEach((key) => {
    if (key !== 'pgn' && key !== 'fields') {
      ;(res as any)[key] = pgn[key]
    }
  })

  const repeatingSize = def.RepeatingFieldSet1Size || 0

  for (let i = 0; i < def.Fields.length - repeatingSize; i++) {
    const field = def.Fields[i]
    const value = (pgn.fields as any)[field.Name]

    if (value !== undefined) {
      ;(res.fields as any)[field.Id] = value
    }
  }

  const list = (pgn.fields as any).list

  if (repeatingSize > 0 && list !== undefined && list.length > 0) {
    const repeating: Field[] = (def.Fields as any).slice(
      def.Fields.length - repeatingSize
    )

    const dest: any = ((res.fields as any).list = [])

    list.forEach((item: any) => {
      const copy: { [key: string]: any } = {}
      dest.push(copy)

      repeating.forEach((field) => {
        const value = item[field.Name]
        copy[field.Id] = value
      })
    })
  }
  return res
}

/**
 * Finds and returns the matching PGN definition for a given PGN object.
 *
 * This function retrieves possible definitions for the provided PGN, filters out fallback definitions,
 * and iteratively matches fields with specific criteria. If a field has a `Match` property, it compares
 * the numeric value of the field in the PGN with the definition. Throws an error if no matching definition
 * is found or if a field value is invalid.
 *
 * @param pgn - The PGN object containing the PGN string and associated fields to match against definitions.
 * @returns The matching `Definition` object for the provided PGN.
 * @throws If the PGN is unknown, if a field value is invalid, or if no matching definition is found.
 * @category PGN Definition Access
 */
export const findMatchingDefinition = (pgn: PGN): Definition => {
  let defs = getPGNWithNumber(pgn.pgn)
  if (defs === undefined) {
    throw Error(`unknown pgn ${pgn.pgn}`)
  }

  if (defs.length === 1) {
    return defs[0]
  }

  defs = defs.filter(
    (pgn: any) => pgn.Fallback === undefined || pgn.Fallback === false
  )

  let def = defs[0]
  let repeatingSize = def.RepeatingFieldSet1Size || 0

  for (let i = 0; i < def.Fields.length - repeatingSize; i++) {
    const field = def.Fields[i]
    const hasMatch = field.Match !== undefined
    let value =
      pgn.fields !== undefined
        ? (pgn.fields as any)[field.Id] || (pgn.fields as any)[field.Name]
        : (pgn as any)[field.Id] || (pgn as any)[field.Name]

    if (hasMatch) {
      const num = getNumericValue(field, value)

      if (num === undefined) {
        throw Error(`invalid value for field ${field.Id}: ${value}`)
      }

      defs = defs.filter((f) => f.Fields[i].Match == num)
      if (defs.length == 0) {
        throw Error('no matching pgn found')
      } else {
        def = defs[0]
        value = def.Fields[i].Description

        if (value == null) {
          value = def.Fields[i].Match
        }
        repeatingSize = def.RepeatingFieldSet1Size || 0
      }
    }
  }
  return def
}

const getNumericValue = (field: Field, value: any) => {
  if (field.FieldType === 'LOOKUP' && typeof value === 'string') {
    return getEnumerationValue(field.LookupEnumeration!, value)
  } else {
    return value
  }
}

/**
 * Retrieves the list of available enumerations from the Canboat library.
 *
 * @returns {Enumeration[]} An array of enumeration objects.
 * @category PGN Definition Access
 */
export const getEnumerations = (): Enumeration[] => {
  return canboat.LookupEnumerations
}

/**
 * Retrieves an enumeration object by its name.
 *
 * @param enumName - The name of the enumeration to search for.
 * @returns The matching `Enumeration` object if found; otherwise, `undefined`.
 * @category PGN Definition Access
 */
export const getEnumeration = (enumName: string): Enumeration | undefined => {
  return getEnumerations().find((e) => e.Name === enumName)
}

/**
 * Retrieves the numeric value associated with a given enumeration name and value string.
 *
 * This function looks up an enumeration by its name, then searches for an enumeration value
 * matching the provided value string. If the enumeration name is 'INDUSTRY_CODE' and the value
 * is 'Marine', it will substitute 'Marine Industry' for the lookup. Returns the corresponding
 * numeric value if found, otherwise returns `undefined`.
 *
 * @param enumName - The name of the enumeration to search.
 * @param value - The string value to look up within the enumeration.
 * @returns The numeric value associated with the enumeration value, or `undefined` if not found.
 * @category PGN Definition Access
 */
export const getEnumerationValue = (
  enumName: string,
  value: string
): number | undefined => {
  const theenum = getEnumeration(enumName)
  if (theenum !== undefined) {
    let theVal = value
    if (enumName === 'INDUSTRY_CODE' && value === 'Marine') {
      theVal = 'Marine Industry'
    }
    const ev = theenum.EnumValues.find((v) => v.Name === theVal)
    if (ev !== undefined) {
      return ev.Value
    }
  }
}

/**
 * Retrieves the name of an enumeration value given the enumeration's name and the value.
 *
 * @param enumName - The name of the enumeration to search.
 * @param value - The numeric value of the enumeration member.
 * @returns The name of the enumeration member if found; otherwise, `undefined`.
 * @category PGN Definition Access
 */
export const getEnumerationName = (
  enumName: string,
  value: number
): string | undefined => {
  const theenum = getEnumeration(enumName)
  if (theenum !== undefined) {
    const theVal = value
    const ev = theenum.EnumValues.find((v) => v.Value === theVal)
    if (ev !== undefined) {
      return ev.Name
    }
  }
}

/**
 * Retrieves the list of bit enumerations from the canboat library.
 *
 * @returns {BitEnumeration[]} An array of bit enumeration objects.
 * @category PGN Definition Access
 */
export const getBitEnumerations = (): BitEnumeration[] => {
  return canboat.LookupBitEnumerations
}

/**
 * Retrieves a bit enumeration object by its name.
 *
 * @param enumName - The name of the bit enumeration to search for.
 * @returns The matching `BitEnumeration` object if found; otherwise, `undefined`.
 * @category PGN Definition Access
 */
export const getBitEnumeration = (
  enumName: string
): BitEnumeration | undefined => {
  return getBitEnumerations().find((e) => e.Name === enumName)
}

/**
 * Retrieves the bit value associated with a specific enumeration value name from a named bit enumeration.
 *
 * @param enumName - The name of the bit enumeration to search within.
 * @param value - The name of the enumeration value whose bit value is to be retrieved.
 * @returns The bit value as a number if found; otherwise, `undefined`.
 * @category PGN Definition Access
 */
export const getBitEnumerationValue = (
  enumName: string,
  value: string
): number | undefined => {
  const theenum = getBitEnumeration(enumName)
  if (theenum !== undefined) {
    const theVal = value
    const ev = theenum.EnumBitValues.find((v) => v.Name === theVal)
    if (ev !== undefined) {
      return ev.Bit
    }
  }
}

/**
 * Retrieves the name associated with a specific bit value from a named bit enumeration.
 *
 * @param enumName - The name of the bit enumeration to search.
 * @param value - The bit value for which to find the corresponding name.
 * @returns The name associated with the given bit value, or `undefined` if not found.
 * @category PGN Definition Access
 */
export const getBitEnumerationName = (
  enumName: string,
  value: number
): string | undefined => {
  const theenum = getBitEnumeration(enumName)
  if (theenum !== undefined) {
    const theVal = value
    const ev = theenum.EnumBitValues.find((v) => v.Bit === theVal)
    if (ev !== undefined) {
      return ev.Name
    }
  }
}

/**
 * @category PGN Definition Editing
 */

export const updateLookup = (enumeration: Enumeration) => {
  for (const def of getEnumerations()) {
    if (enumeration.Name === def.Name) {
      Object.assign(def, enumeration)
      return
    }
  }
  canboat.LookupEnumerations.push(enumeration as any)
}
/**
 * @category PGN Definition Editing
 */

export const updateBitLookup = (enumeration: BitEnumeration) => {
  for (const def of getBitEnumerations()) {
    if (enumeration.Name === def.Name) {
      Object.assign(def, enumeration)
      return
    }
  }
  canboat.LookupEnumerations.push(enumeration as any)
}

/**
 * Retrieves the list of field type enumerations from the Canboat library.
 *
 * @returns {FieldTypeEnumeration[]} An array of field type enumerations.
 * @category PGN Definition Access
 */
export const getFieldTypeEnumerations = (): FieldTypeEnumeration[] => {
  return canboat.LookupFieldTypeEnumerations
}

/**
 * Retrieves a specific field type enumeration by its name.
 *
 * @param enumName - The name of the field type enumeration to search for.
 * @returns The matching {@link FieldTypeEnumeration} object if found; otherwise, `undefined`.
 * @category PGN Definition Access
 */
export const getFieldTypeEnumeration = (
  enumName: string
): FieldTypeEnumeration | undefined => {
  return getFieldTypeEnumerations().find((e) => e.Name === enumName)
}

/**
 * Retrieves the numeric value associated with a specific enumeration field type value.
 *
 * Given an enumeration name and a value name, this function looks up the corresponding
 * enumeration object and searches for the field type value by name. If found, it returns
 * the associated numeric value; otherwise, it returns `undefined`.
 *
 * @param enumName - The name of the enumeration to search within.
 * @param value - The name of the field type value to look up.
 * @returns The numeric value of the field type if found, or `undefined` if not found.
 * @category PGN Definition Access
 */
export const getFieldTypeEnumerationValue = (
  enumName: string,
  value: string
): number | undefined => {
  const theenum = getFieldTypeEnumeration(enumName)
  if (theenum !== undefined) {
    const theVal = value
    const ev = theenum.EnumFieldTypeValues.find((v) => v.name === theVal)
    if (ev !== undefined) {
      return ev.value
    }
  }
}

/**
 * Retrieves the name of an enumeration value from a specified field type enumeration.
 *
 * @param enumName - The name of the enumeration to search within.
 * @param value - The numeric value of the enumeration member to look up.
 * @returns The name of the enumeration member if found; otherwise, `undefined`.
 * @category PGN Definition Access
 */
export const getFieldTypeEnumerationName = (
  enumName: string,
  value: number
): string | undefined => {
  const theenum = getFieldTypeEnumeration(enumName)
  if (theenum !== undefined) {
    const theVal = value
    const ev = theenum.EnumFieldTypeValues.find((v) => v.value === theVal)
    if (ev !== undefined) {
      return ev.name
    }
  }
}

/**
 * Retrieves the bit representation for a specific value from a field type enumeration.
 *
 * @param enumName - The name of the enumeration to search.
 * @param value - The value within the enumeration for which to get the bit representation.
 * @returns The bit representation as a number if found; otherwise, `undefined`.
 * @category PGN Definition Access
 */
export const getFieldTypeEnumerationBits = (
  enumName: string,
  value: number
): number | undefined => {
  const theenum = getFieldTypeEnumeration(enumName)
  if (theenum !== undefined) {
    const theVal = value
    const ev = theenum.EnumFieldTypeValues.find((v) => v.value === theVal)
    if (ev !== undefined) {
      return Number(ev.Bits)
    }
  }
}

/**
 * Converts a given name string to a valid identifier by first transforming it to camel case,
 * then fixing any invalid characters using underscores as replacements.
 *
 * @param name - The input string to be converted into an identifier.
 * @returns A string representing the fixed identifier in camel case format.
 * @category Utilities
 */
export const nameToId = (name: string) => {
  return fixIdentifier(camelCase(name), '_')
  //return camelCase(fixIdentifier(name, '_'))
}

let skServerSupportsCamelCase: boolean | undefined = undefined
let skServerSupportsCamelCaseCacheEnabled = true

/**
 * Set whether the signalk-server supports camelCase keys in PGNs.
 * This is mainly useful for testing purposes.
 *
 * @category Utilities
 */
export const setSupportsCamelCaseCacheEnabled = (enabled: boolean) => {
  skServerSupportsCamelCaseCacheEnabled = enabled
  skServerSupportsCamelCase = undefined
}

function isCamelCaseSupported(app: any) {
  const check = () =>
    satisfies(app.config.version, '>=2.15.0') ||
    satisfies(app.config.version, '>=2.15.0-beta')
  if (skServerSupportsCamelCaseCacheEnabled) {
    if (skServerSupportsCamelCase === undefined) {
      skServerSupportsCamelCase = check()
    }
    return skServerSupportsCamelCase
  } else {
    return check()
  }
}

/**
 * Converts the keys of a PGN object to camelCase if the server does not support camelCase.
 *
 * @param pluginApp - The plugin application instance used to determine camelCase support.
 * @param pgn - The PGN object whose keys may be converted to camelCase.
 * @returns The PGN object with camelCase keys if not supported by the server; otherwise, returns the original PGN object.
 * @category Utilities
 */
export const convertCamelCase = (pluginApp: any, pgn: PGN) => {
  return isCamelCaseSupported(pluginApp) === false ? mapCamelCaseKeys(pgn) : pgn
}

/**
 * Converts the property names of a PGN object to camelCase if the server does not support camelCase.
 *
 * @param pluginApp - The plugin application instance used to determine camelCase support.
 * @param pgn - The PGN object whose property names may be converted.
 * @returns The PGN object with property names in camelCase if not supported by the server; otherwise, returns the original PGN object.
 * @category Utilities
 */
export const convertNamesToCamel = (pluginApp: any, pgn: any) => {
  return isCamelCaseSupported(pluginApp) === false
    ? mapNameKeysToCamelCase(pgn)
    : pgn
}

/**
 * Creates an instance of a NMEA 2000 group function PGN message based on the specified group function type,
 * PGN definition, and optional destination address.
 *
 * This utility function maps the provided group function to the appropriate PGN message constructor,
 * populating its parameters and values from the PGN's field definitions.
 *
 * @param groupFunction - The type of group function to create (e.g., Request, Command, Acknowledge, ReadFields, etc.).
 * @param pgn - The PGN object containing the definition and field values.
 * @param fields - Optional additional fields to include in the message.
 * @param dst - Optional destination address for the message.
 * @returns An instance of the corresponding NMEA 2000 group function PGN message.
 * @throws Error if the provided group function is not supported.
 * @category Utilities
 */
export const createNmeaGroupFunction = (
  groupFunction: GroupFunction,
  pgn: PGN,
  fields?: any,
  dst?: number
) => {
  const def = pgn.getDefinition()
  const pgna = pgn as any
  const list: any[] = []
  let pkey: string, vkey: string

  switch (groupFunction) {
    case GroupFunction.Request:
    case GroupFunction.Command:
    case GroupFunction.Acknowledge:
      pkey = 'parameter'
      vkey = 'value'
      break
    case GroupFunction.ReadFields:
    case GroupFunction.ReadFieldsReply:
    case GroupFunction.WriteFields:
    case GroupFunction.WriteFieldsReply:
      pkey = 'selectionParameter'
      vkey = 'selectionValue'
      break
  }

  def.Fields.forEach((field: Field, index: number) => {
    const value = pgna.fields[field.Id]
    if (value !== undefined) {
      list.push({ [pkey]: index + 1, [vkey]: value })
    }
  })

  switch (groupFunction) {
    case GroupFunction.Request:
      return new PGN_126208_NmeaRequestGroupFunction(
        { pgn: pgn.pgn, numberOfParameters: list.length, list, ...fields },
        dst
      )
    case GroupFunction.Command:
      return new PGN_126208_NmeaCommandGroupFunction(
        { pgn: pgn.pgn, numberOfParameters: list.length, list, ...fields },
        dst
      )
    case GroupFunction.Acknowledge:
      return new PGN_126208_NmeaAcknowledgeGroupFunction(
        { pgn: pgn.pgn, numberOfParameters: list.length, list, ...fields },
        dst
      )
    case GroupFunction.ReadFields:
      return new PGN_126208_NmeaReadFieldsGroupFunction(
        {
          pgn: pgn.pgn,
          numberOfParameters: list.length,
          list: list as {
            selectionParameter?: N2K_FieldIndex
            selectionValue?: N2K_Variable
          }[],
          list2: [],
          ...fields
        },
        dst
      )
    case GroupFunction.ReadFieldsReply:
      return new PGN_126208_NmeaReadFieldsReplyGroupFunction(
        {
          pgn: pgn.pgn,
          numberOfParameters: list.length,
          list: list as {
            selectionParameter?: N2K_FieldIndex
            selectionValue?: N2K_Variable
          }[],
          list2: [],
          ...fields
        },
        dst
      )
    case GroupFunction.WriteFields:
      return new PGN_126208_NmeaWriteFieldsGroupFunction(
        {
          pgn: pgn.pgn,
          numberOfParameters: list.length,
          list: list as {
            selectionParameter?: N2K_FieldIndex
            selectionValue?: N2K_Variable
          }[],
          list2: [],
          ...fields
        },
        dst
      )
    case GroupFunction.WriteFieldsReply:
      return new PGN_126208_NmeaWriteFieldsReplyGroupFunction(
        {
          pgn: pgn.pgn,
          numberOfParameters: list.length,
          list: list as {
            selectionParameter?: N2K_FieldIndex
            selectionValue?: N2K_Variable
          }[],
          list2: [],
          ...fields
        },
        dst
      )
    default:
      throw new Error(`Unsupported group function: ${groupFunction}`)
  }
}

// Export PGN header generation functions
export { 
  generatePgnHeaderEntry, 
  generateMultiplePgnHeaderEntries,
  generateLookupHeaderEntry,
  generateBitLookupHeaderEntry,
  generateFieldTypeLookupHeaderEntry,
  generateMultipleLookupEntries
} from './pgnHeaderGenerator'
