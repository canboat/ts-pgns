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
import { getAllPGNs } from './index'
import { Definition, Field } from './definition'
import minimist from 'minimist'
import pgns from '../canboat.json'

const argv = minimist(process.argv.slice(2), {
  boolean: ['enums', 'pgns', 'categories'],
  alias: { h: 'help' }
})

const filtered: Definition[] = getAllPGNs()

function enumName(name: string) {
  return fixIdentifier(camelCase(name, { pascalCase: true }), '_')
}

const organized: { [key: number]: Definition[] } = {}
const pgnNumbers: number[] = []

function organizePGNs() {
  filtered.forEach((pgn) => {
    if (!organized[pgn.PGN]) {
      organized[pgn.PGN] = []
      pgnNumbers.push(pgn.PGN)
    }
    organized[pgn.PGN].push(pgn)
  })
}

organizePGNs()

if (argv.enums) {
  const category = () => {
    console.log('/**')
    console.log(` * @category Enumerations`)
    console.log(' */')
  }

  pgns.LookupEnumerations.forEach((en: any) => {
    const done: { [key: string]: number } = {}
    category()
    console.log(`export enum ${enumName(en.Name)} {`)
    en.EnumValues.forEach((v: any) => {
      const name = enumName(v.Name)
      const found = done[name]
      if (!found) {
        done[name] = 1
        console.log(`  ${name} = '${v.Name}',`)
      }
    })
    console.log('}\n')
  })

  pgns.LookupIndirectEnumerations.forEach((en: any) => {
    const done: { [key: string]: number } = {}
    category()
    console.log(`export enum ${enumName(en.Name)} {`)
    en.EnumValues.forEach((v: any) => {
      const name = enumName(v.Name)
      const found = done[name]
      if (!found) {
        done[name] = 1
        console.log(`  ${name} = '${v.Name}',`)
      }
    })
    console.log('}\n')
  })

  pgns.LookupBitEnumerations.forEach((en: any) => {
    const done: { [key: string]: number } = {}
    category()
    console.log(`export enum ${enumName(en.Name)} {`)
    en.EnumBitValues.forEach((v: any) => {
      const name = enumName(v.Name)
      const found = done[name]
      if (!found) {
        done[name] = 1
        console.log(`  ${name} = '${v.Name}',`)
      }
    })
    console.log('}\n')
  })
}

if (argv.pgns) {
  console.log('/* eslint-disable @typescript-eslint/no-explicit-any */')
  console.log("import * as enums from './enums'\n")

  pgns.FieldTypes.forEach((ft: any) => {
    let type = 'number'
    switch (ft.Name) {
      case 'LOOKUP':
      case 'INDIRECT_LOOKUP':
      case 'BITLOOKUP':
        return

      case 'DATE':
      case 'TIME':
      case 'DYNAMIC_FIELD_KEY':
      case 'STRING_FIX':
      case 'STRING_LZ':
      case 'STRING_LAU':
      case 'MMSI':
        type = 'string'
        break

      case 'DYNAMIC_FIELD_VALUE':
      case 'VARIABLE':
        type = 'any'
        break
    }

    console.log('/**')
    console.log(` * @category Field Types`)
    console.log(' */')
    console.log(
      `export type N2K_${camelCase(ft.Name, { pascalCase: true })} = ${type}`
    )
  })

  console.log('')

  console.log('/**')
  console.log(` * @category PGN Definitions`)
  console.log(' */')
  console.log('export interface PGNFields {')
  console.log('}\n')

  console.log('/**')
  console.log(` * @category PGN Definitions`)
  console.log(' */')
  console.log('export interface PGN {')
  console.log('  pgn: number')
  console.log('  prio: number')
  console.log('  src?: number')
  console.log('  dst: number')
  console.log('  timestamp?: string')
  console.log('  input?: string[]')
  console.log('  description?: string')
  console.log('  fields: PGNFields')
  console.log('}\n')

  /*
    function getMatchFields(pgn: Definition) : Field[] {
    return pgn.Fields.filter(field => field.Match !== undefined)
    }

    function getPGNsWithMatchs(pgns: Definition[], count: number) : Definition[] {
    const res : Definition[] = []
    pgns.forEach(pgn => {
    const matches = getMatchFields(pgn)
    if ( matches.length == count ) {
    res.push(pgn)
    }
    })
    return res
    }

    function getMaxMatchs(pgns: Definition[]) : number {
    let res = 0
    pgns.forEach(pgn => {
    const matches = getMatchFields(pgn)
    if ( matches.length > res ) {
    res = matches.length
    }
    })
    return res
    }
  */

  pgnNumbers.forEach((pgnNumber) => {
    const pgns = organized[pgnNumber]
    pgns.forEach((pgn: any) => {
      outputPGN(pgn, pgns.length > 1)
    })
    /*
      const pgns = organized[pgnNumber]
      if ( pgns.length === 1 ) {
      outputPGN(pgns[0], false)
      } else {
      const matchesByCount = []
      for ( let i = 0; i < getMaxMatchs(pgns); i++ ) {
      const withCount = getPGNsWithMatchs(pgns, i)
      withCount.forEach(pgn => {
      outputPGN(pgn, true, i)
      })
      }
      }
    */
  })

  function getFieldString(field: Field) {
    let type = 'number'
    let required =
      field.PartOfPrimaryKey == true || field.BitLength === 1 ? '' : '?'

    switch (field.FieldType) {
      case 'RESERVED':
      case 'SPARE':
        required = '?'
        break

      case 'LOOKUP':
        if (field.LookupEnumeration) {
          type = `enums.${enumName(field.LookupEnumeration)}|number`
        } else {
          //FIXME! error
        }
        break

      case 'INDIRECT_LOOKUP':
        if (field.LookupIndirectEnumeration) {
          type = `enums.${enumName(field.LookupIndirectEnumeration)}|number`
        }
        break

      case 'BITLOOKUP':
        if (field.LookupBitEnumeration) {
          type = `enums.${enumName(field.LookupBitEnumeration)}[]`
        }
        break

      default:
        type = `N2K_${camelCase(field.FieldType, { pascalCase: true })}`
        break
    }

    return `${fixIdentifier(field.Id, '_')}${required}: ${type}`
  }

  function outputPGN(pgn: Definition, isMulti: boolean) {
    let typeName = `PGN_${pgn.PGN}`

    let hasMatchFields = false
    if (isMulti) {
      if (pgn.Fields.find((f) => f.Match !== undefined)) {
        typeName = `${typeName}_${camelCase(pgn.Id, { pascalCase: true })}`
        hasMatchFields = true
      }

      /*
      pgn.Fields.forEach((field: Field) => {
        if (field.Match && field.LookupEnumeration !== 'INDUSTRY_CODE') {
          const desc = field.Description
            ? enumName(field.Description)
            : field.Match
          typeName = typeName + `_${desc}`
        }
        })
      */
    }

    const category = () => {
      console.log('/**')
      console.log(` * @category ${typeName}`)
      console.log(' */')
    }

    console.log('/**')
    console.log(`  * PGN: ${pgn.PGN}`)
    console.log('  *')
    console.log(`  * Description: ${pgn.Description}`)
    if (pgn.Explanation) {
      console.log('  *')
      console.log(`  * Explanation: ${pgn.Explanation}`)
    }
    if (isMulti) {
      console.log('  *')
      pgn.Fields.forEach((field: Field) => {
        if (field.Match) {
          console.log(
            `  * Match: ${field.Name} == ${field.Description || field.Match}<br>`
          )
        }
      })
    }
    console.log('  *')
    console.log(`  * @category ${typeName}`)
    console.log(' */')

    console.log(`export interface ${typeName} extends PGN {`)
    console.log(` fields: ${typeName}Fields`)
    console.log('}\n')

    category()
    console.log(`export interface ${typeName}Fields {`)
    pgn.Fields.forEach((field: Field, idx: number) => {
      if (
        pgn.RepeatingFieldSet1StartField !== undefined &&
        idx + 1 >= pgn.RepeatingFieldSet1StartField &&
        idx + 1 < pgn.RepeatingFieldSet1StartField + pgn.RepeatingFieldSet1Size!
      ) {
        return
      }
      console.log(`  ${getFieldString(field)}`)
    })
    if (pgn.RepeatingFieldSet1Size !== undefined) {
      console.log(`  list: {`)
      for (let i = 0; i < pgn.RepeatingFieldSet1Size; i++) {
        const field = pgn.Fields[i + pgn.RepeatingFieldSet1StartField! - 1]
        console.log(`    ${getFieldString(field)}`)
      }
      console.log('  }[]')
    }
    if (pgn.RepeatingFieldSet2Size !== undefined) {
      console.log(`  list2: any[]`)
    }
    console.log('}\n')

    category()
    console.log(`export const ${typeName}Defaults = {`)
    console.log(`  pgn: ${pgn.PGN},`)
    console.log(`  dst: 255,`)
    console.log(`  prio: ${pgn.Priority !== undefined ? pgn.Priority : 3}`)
    console.log('}\n')

    if (hasMatchFields) {
      category()
      console.log(`export const ${typeName}MatchFields = {`)
      pgn.Fields.forEach((field: Field) => {
        if (field.Match) {
          let value: any
          if (field.FieldType === 'LOOKUP' && field.Description) {
            const ename =
              field.LookupEnumeration === 'INDUSTRY_CODE' &&
              field.Description === 'Marine Industry'
                ? 'Marine'
                : enumName(field.Description)

            enumName(field.Description)
            value = `enums.${enumName(field.LookupEnumeration!)}.${ename}`
          } else {
            value =
              typeof field.Description !== 'number'
                ? field.Match
                : field.Description!
          }
          console.log(`  ${fixIdentifier(field.Id, '_')}: ${value},`)
        }
      })
      console.log('}\n')

      category()
      console.log(`export interface ${typeName}CreateArgs {`)
      pgn.Fields.forEach((field: Field, idx) => {
        if (!field.Match) {
          if (
            pgn.RepeatingFieldSet1StartField !== undefined &&
            idx + 1 >= pgn.RepeatingFieldSet1StartField &&
            idx + 1 <
              pgn.RepeatingFieldSet1StartField + pgn.RepeatingFieldSet1Size!
          ) {
            return
          }
          console.log(`  ${getFieldString(field)}`)
        }
      })
      if (pgn.RepeatingFieldSet1Size !== undefined) {
        console.log(`  list: {`)
        for (let i = 0; i < pgn.RepeatingFieldSet1Size; i++) {
          const field = pgn.Fields[i + pgn.RepeatingFieldSet1StartField! - 1]
          console.log(`    ${getFieldString(field)}`)
        }
        console.log('  }[]')
      }
      if (pgn.RepeatingFieldSet2Size !== undefined) {
        console.log(`  list2: any[]`)
      }
      console.log('}\n')
    }

    const createArgs = hasMatchFields ? 'CreateArgs' : 'Fields'

    category()
    console.log(
      `export const new${typeName} = (fields: ${typeName}${createArgs}, dst:number=255) : ${typeName} => {`
    )
    console.log('  return {')
    console.log(`    ...${typeName}Defaults,`)
    console.log('    dst,')
    console.log('    fields: {')
    if (hasMatchFields) {
      console.log(`      ...${typeName}MatchFields,`)
    }
    console.log('      ...fields')
    console.log('    }')
    console.log('  }')
    console.log('}')
  }
}

function fixIdentifier(str: string, prefix: string) {
  let res = str

  const firstChar = str[0]
  if (
    !(
      (firstChar >= 'a' && firstChar <= 'z') ||
      (firstChar >= 'A' && firstChar <= 'Z') ||
      firstChar === '_' ||
      firstChar === '$'
    ) &&
    firstChar !== '+' &&
    firstChar !== '-'
  ) {
    res = `${prefix}` + str
  }

  let newS = ''
  for (let i = 0; i < res.length; i++) {
    const char = res[i]

    if (char == '-') {
      newS = newS + 'Minus'
    } else if (char === '+') {
      newS = newS + 'Plus'
    } else if (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9') ||
      char === '_' ||
      char === '$'
    ) {
      newS = newS + char
    }
  }
  return newS
}
