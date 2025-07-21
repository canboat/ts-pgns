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

let pgnNumberMap: { [key: number]: Definition[] }

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
 * @category PGN Definition Access
 */
export const getPGNWithNumber = (num: number): Definition[] | undefined => {
  return getPGNNumberMap()[num]
}

/**
 * @category PGN Definition Access
 */
export const getPGNWithId = (id: string): Definition | undefined => {
  return getPGNIdMap()[id]
}

/**
 * Check if the pgn matches to given fields
 *
 * @category Utilities
 */
export const isMatch = (pgn: any, matchFields: any) => {
  return !Object.keys(matchFields).some((key: string) => {
    return pgn.fields === undefined || pgn.fields[key] !== matchFields[key]
  })
}

/**
 * Converts a PGN created using camelCase keys to one using Names
 *
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
 * Converts a PGN created using camelCase keys to one using Names
 *
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
 * @category PGN Definition Access
 */
export const getEnumerations = (): Enumeration[] => {
  return canboat.LookupEnumerations
}

/**
 * @category PGN Definition Access
 */
export const getEnumeration = (enumName: string): Enumeration | undefined => {
  return getEnumerations().find((e) => e.Name === enumName)
}

/**
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
 * @category PGN Definition Access
 */
export const getBitEnumerations = (): BitEnumeration[] => {
  return canboat.LookupBitEnumerations
}

/**
 * @category PGN Definition Access
 */
export const getBitEnumeration = (
  enumName: string
): BitEnumeration | undefined => {
  return getBitEnumerations().find((e) => e.Name === enumName)
}

/**
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
 * @category PGN Definition Access
 */
export const getFieldTypeEnumerations = (): FieldTypeEnumeration[] => {
  return canboat.LookupFieldTypeEnumerations
}

/**
 * @category PGN Definition Access
 */
export const getFieldTypeEnumeration = (
  enumName: string
): FieldTypeEnumeration | undefined => {
  return getFieldTypeEnumerations().find((e) => e.Name === enumName)
}

/**
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
 *
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
 * Convert a PGN with camelCase keys to old, Name based keys
 * if the signalk-server version does no support camelCase
 *
 * @category Utilities
 */
export const convertCamelCase = (pluginApp: any, pgn: PGN) => {
  return isCamelCaseSupported(pluginApp) === false ? mapCamelCaseKeys(pgn) : pgn
}

/**
 * Convert a PGN with Name keys to camelCase keys
 * if the signalk-server version does support camelCase
 *
 * @category Utilities
 */
export const convertNamesToCamel = (pluginApp: any, pgn: any) => {
  return isCamelCaseSupported(pluginApp) === false
    ? mapNameKeysToCamelCase(pgn)
    : pgn
}

export const createNmeaGroupFunction = (
  groupFunction: GroupFunction,
  pgn: PGN,
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
        { pgn: pgn.pgn, numberOfParameters: list.length, list },
        dst
      )
    case GroupFunction.Command:
      return new PGN_126208_NmeaCommandGroupFunction(
        { pgn: pgn.pgn, numberOfParameters: list.length, list },
        dst
      )
    case GroupFunction.Acknowledge:
      return new PGN_126208_NmeaAcknowledgeGroupFunction(
        { pgn: pgn.pgn, numberOfParameters: list.length, list },
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
          list2: []
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
          list2: []
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
          list2: []
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
          list2: []
        },
        dst
      )
    default:
      throw new Error(`Unsupported group function: ${groupFunction}`)
  }
}
