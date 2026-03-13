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

import canboat from '../canboat-lookups.json'
import {
  Enumeration,
  BitEnumeration,
  FieldTypeEnumeration
} from './definition'

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
export const removeLookup = (enumeration: Enumeration) => {
  const index = canboat.LookupEnumerations.findIndex(
    (e) => e.Name === enumeration.Name
  )
  if (index !== -1) {
    canboat.LookupEnumerations.splice(index, 1)
  }
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
 * @category PGN Definition Editing
 */
export const removeBitLookup = (enumeration: BitEnumeration) => {
  const index = canboat.LookupBitEnumerations.findIndex(
    (e) => e.Name === enumeration.Name
  )
  if (index !== -1) {
    canboat.LookupBitEnumerations.splice(index, 1)
  }
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
