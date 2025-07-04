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

import { PGN } from './pgns'
import canboat from '../canboat.json'
import { getPGN } from './index'
import {
  Field,
  Definition,
  Enumeration,
  BitEnumeration,
  FieldTypeEnumeration
} from './definition'

/**
 * @category PGN Definition Access
 */
export type PGNMap = {
  [key: number]: Definition[]
}

/**
 * Convers a PGN created using camelCase keys to one using Names
 * 
 * @category Utilities
 */
export const mapCamelCaseKeys = (pgn: PGN) => {
  const def = findMatchingDefinition(pgn)

  if (def === undefined) {
    throw Error(`can't find matching pgn`)
  }

  const res: any = pgn //copy??

  if (pgn.fields !== undefined && res.fields === undefined) {
    res.fields = {}
  }

  const repeatingSize = def.RepeatingFieldSet1Size || 0

  for (let i = 0; i < def.Fields.length - repeatingSize; i++) {
    const field = def.Fields[i]
    const value =
      pgn.fields !== undefined
        ? (pgn.fields as any)[field.Id]
        : (pgn as any)[field.Id]

    if (value !== undefined) {
      if (pgn.fields !== undefined) {
        res.fields[field.Name] = value
      } else {
        res[field.Name] = value
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
      //const copy: { [key: string]: any } = {}
      //dest.list.push(copy)
      repeating.forEach((field) => {
        const value = item[field.Id]
        item[field.Name] = value

        /*if (value !== undefined) {
          copy[field.Name] = value
          }
          */
      })
    })
  }
  return res
}

/**
 * @category PGN Definition Access
 */
export const findMatchingDefinition = (pgn: PGN): Definition => {
  let defs = getPGN(pgn.pgn)
  if (defs === undefined) {
    throw Error(`unknown pgn ${pgn.pgn}`)
  }

  let def = defs[0]

  if (defs.length === 1) {
    return def
  }

  let repeatingSize = def.RepeatingFieldSet1Size || 0

  for (let i = 0; i < def.Fields.length - repeatingSize; i++) {
    const field = def.Fields[i]
    const hasMatch = field.Match !== undefined
    let value =
      pgn.fields !== undefined
        ? (pgn.fields as any)[field.Id]
        : (pgn as any)[field.Id]

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
    const ev = theenum.EnumValues.find((v) => v.Name === value)
    if (ev !== undefined) {
      return ev.Value
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
export const getFieldTypeEnumerations = (): FieldTypeEnumeration[] => {
  return canboat.LookupFieldTypeEnumerations
}
