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
import { Definition, Field, FieldType } from './definition'
import { fixIdentifier } from './internals'
import minimist from 'minimist'
import pgns from '../canboat.json'

const argv = minimist(process.argv.slice(2), {
  boolean: ['enums', 'pgns'],
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
    let done: { [key: string]: number } = {}
    category()
    console.log(`export enum ${enumName(en.Name)} {`)
    en.EnumValues.forEach((v: any) => {
      const vName = v.Name
      const name = enumName(v.Name)
      const found = done[name]
      if (!found) {
        done[name] = 1
        console.log(`  ${name} = '${vName}',`)
      }
    })
    if (en.Name === 'INDUSTRY_CODE') {
      console.log(
        '  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values'
      )
      console.log(`  Marine = 'Marine Industry',`)
    }
    console.log('}\n')

    done = {}
    category()
    console.log(
      `export const ${enumName(en.Name)}Values: {[key: string]: number} = {`
    )
    en.EnumValues.forEach((v: any) => {
      const name = enumName(v.Name)
      const found = done[name]
      if (found) {
        const num = done[name] + 1
        done[name] = num
        console.log(`  ${name}${num}: 0x${v.Value.toString(16)},`)
      } else {
        done[name] = 1
        //console.log(`  ${name} = 0x${v.Value.toString(16)},`)
        console.log(
          `  [${enumName(en.Name)}.${name}]: 0x${v.Value.toString(16)},`
        )
      }
    })
    if (en.Name === 'INDUSTRY_CODE') {
      console.log(`  Marine: 0x4,`)
    }
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
  console.log("import {isMatch, getPGNWithId} from './utilities'\n")
  console.log("import {Definition} from './definition'\n")

  console.log('const pgnIdToCreator: {[key:string]: any} = {}\n')

  console.log(`/**
  * Create a PGN object
  *
  * @category Utilities
  */`)
  console.log(`export const createPGN = (id: string, fields: any, dst:number|undefined = undefined ) : PGN|undefined => {
  const creator = pgnIdToCreator[id]

  if ( creator === undefined ) {
    return undefined
  }
  return creator(fields, dst)
}`)

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
  console.log('export interface PGNFields {}\n')

  console.log(`/**'
 * @category PGN Definitions
 */
export interface PGNInterface {
  pgn: number
  prio: number
  src?: number
  dst: number
  timestamp?: string
  input?: string[]
  description?: string
  fields: PGNFields,
  getDefinition(): Definition
}\n`)

  console.log(`/**
 * @category PGN Definitions
 */
export abstract class PGN implements PGNInterface {
  pgn: number
  prio: number
  src?: number
  dst: number
  timestamp?: string
  input?: string[]
  description?: string
  fields: PGNFields
  
  constructor(fields: any) {
    this.pgn = fields.pgn
    this.prio = fields.prio
    this.src = fields.src
    this.dst = fields.dst !== undefined ? fields.dst : 255
    this.timestamp = fields.timestamp
    this.fields = fields.fields
  }

  abstract getDefinition(): Definition
}`)

  pgnNumbers.forEach((pgnNumber) => {
    const pgns = organized[pgnNumber]
    pgns.forEach((pgn: any) => {
      if (pgn.PGN !== 59392 || !pgn.Fallback) {
        outputPGN(pgn)
      }
    })
  })

  function getFieldString(field: Field) {
    let type = 'number'
    let required =
      field.PartOfPrimaryKey == true || field.BitLength === 1 ? '' : '?'

    switch (field.FieldType) {
      case FieldType.Reserved:
      case FieldType.Spare:
        required = '?'
        break

      case FieldType.Lookup:
        if (field.LookupEnumeration) {
          type = `enums.${enumName(field.LookupEnumeration)} | number`
        } else {
          //FIXME! error
        }
        break

      case FieldType.IndirectLookup:
        if (field.LookupIndirectEnumeration) {
          type = `enums.${enumName(field.LookupIndirectEnumeration)} | number`
        }
        break

      case FieldType.BitLookup:
        if (field.LookupBitEnumeration) {
          type = `enums.${enumName(field.LookupBitEnumeration)}[]`
        }
        break

      default:
        type = `N2K_${camelCase(field.FieldType, { pascalCase: true })}`
        if (field.Match !== undefined) {
          type = type + ' | string'
        }
        break
    }

    return `${fixIdentifier(field.Id, '_')}${required}: ${type}`
  }

  function outputPGN(pgn: Definition) {
    const hasMatchFields = pgn.Fields.find((f) => f.Match !== undefined)
    let typeNameNoPGN = `${pgn.PGN}`
    //let typeNameNoPGN = `${pgn.PGN}_${pgn.Id.charAt(0).toUpperCase() + pgn.Id.slice(1)}`

    if (hasMatchFields) {
      typeNameNoPGN = `${typeNameNoPGN}_${camelCase(pgn.Id, { pascalCase: true, preserveConsecutiveUppercase: true })}`
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

    const typeName = `PGN_${typeNameNoPGN}`

    const category = () => {
      console.log(`/**
 * @category ${typeName}
 */`)
    }

    console.log('/**')
    console.log(` * PGN: ${pgn.PGN}`)
    console.log(' *')
    console.log(` * Description: ${pgn.Description}`)
    if (pgn.Explanation) {
      console.log(' *')
      console.log(` * Explanation: ${pgn.Explanation}`)
    }
    if (hasMatchFields) {
      console.log(' *')
      pgn.Fields.forEach((field: Field) => {
        if (field.Match) {
          console.log(
            ` * Match: ${field.Name} == ${field.Description || field.Match}<br>`
          )
        }
      })
    }
    console.log(' *')
    console.log(` * @category ${typeName}`)
    console.log(' */')

    console.log(`export interface ${typeName}Interface extends PGNInterface {`)
    console.log(`  fields: ${typeName}Fields`)
    console.log('}\n')

    category()
    console.log(`export interface ${typeName}Fields {`)
    const outputFields = () => {
      pgn.Fields.forEach((field: Field, idx: number) => {
        if (
          pgn.RepeatingFieldSet1StartField !== undefined &&
          idx + 1 >= pgn.RepeatingFieldSet1StartField &&
          idx + 1 <
            pgn.RepeatingFieldSet1StartField + pgn.RepeatingFieldSet1Size!
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
    }
    outputFields()
    console.log('}\n')

    /*
    category()
    console.log(`export const ${typeName}Defaults = {`)
    console.log(`  pgn: ${pgn.PGN},`)
    console.log(`  dst: 255,`)
    console.log(`  prio: ${pgn.Priority !== undefined ? pgn.Priority : 3},`)
    console.log(`  fields: []`)
    console.log('}\n')
    */

    if (hasMatchFields) {
      category()
      console.log(`export const ${typeName}MatchFields = {`)
      pgn.Fields.forEach((field: Field) => {
        if (field.Match !== undefined) {
          let value: any
          if (field.FieldType === FieldType.Lookup && field.Description) {
            const ename = enumName(field.Description)
            enumName(field.Description)
            value = `enums.${enumName(field.LookupEnumeration!)}.${ename}`
          } else {
            value =
              typeof field.Description === 'string'
                ? `"${field.Description}"`
                : field.Match
            /*
              typeof field.Description !== 'number'
                ? field.Match
                : field.Description!
            */
          }
          console.log(`  ${fixIdentifier(field.Id, '_')}: ${value},`)
        }
      })
      console.log('}\n')

      category()
      console.log(`export interface ${typeName}CreateArgs {`)
      pgn.Fields.forEach((field: Field, idx) => {
        if (field.Match === undefined) {
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
    console.log(`export class ${typeName} extends PGN implements ${typeName}Interface {
  fields: ${typeName}Fields

  constructor(fields: ${typeName}${createArgs}, dst: number = 255) {
    super({
      pgn: ${pgn.PGN},
      prio: ${pgn.Priority !== undefined ? pgn.Priority : 3},
      dst
    })`)

    if (hasMatchFields) {
      console.log(`    this.fields = { ...${typeName}MatchFields, ...fields }`)
    } else {
      console.log(`    this.fields = fields`)
    }
    console.log(`  }\n`)

    if (hasMatchFields) {
      console.log(`  static isMatch(pgn:PGN) {
    return isMatch(pgn, ${typeName}MatchFields)
  }`)
    }

    console.log(`  getDefinition(): Definition {
    return getPGNWithId('${pgn.Id}')!
  }`)

    console.log('}')
    console.log(
      `pgnIdToCreator['${pgn.Id}'] = (fields:any, dst:number) => new ${typeName}(fields, dst)`
    )
    console.log('\n')

    /*
    console.log(
      `export const new${typeNameNoPGN} = (fields: ${typeName}${createArgs}, dst:number=255) : ${typeName} => {`
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
    */
  }
}
