import { expect } from 'chai'
import {
  getPGNWithId,
  findMatchingDefinition,
  mapCamelCaseKeys,
  mapNameKeysToCamelCase,
  generatePgnHeaderEntry,
  PGN_130822_NavicoUdbDatabaseTableDump11
} from '../dist/index'

// canboat 10.0 nests repeating set 2 in set 1 (RepeatingFieldSet2Parent):
// each `list` record holds its own `list2`.
describe('nested repeating sets', () => {
  const tables = [
    {
      count: 2,
      list2: [
        { length: 4, value: 0 },
        { length: 4, value: -0.3 }
      ]
    },
    { count: 1, list2: [{ length: 4, value: 1.5 }] }
  ]

  it('are marked in the definition', () => {
    const def = getPGNWithId('navicoUdbDatabaseTableDump11')!
    expect(def.RepeatingFieldSet2Parent).to.equal(1)
    expect(
      getPGNWithId('nmeaReadFieldsGroupFunction')!.RepeatingFieldSet2Parent
    ).to.be.undefined
  })

  it('keep list2 in each list record when mapping keys', () => {
    const pgn = new PGN_130822_NavicoUdbDatabaseTableDump11({
      item: 3,
      list: tables
    })
    expect(findMatchingDefinition(pgn).Id).to.equal(
      'navicoUdbDatabaseTableDump11'
    )

    const named = mapCamelCaseKeys(pgn)
    expect(named.fields.list).to.deep.equal([
      {
        Count: 2,
        list2: [
          { Length: 4, Value: 0 },
          { Length: 4, Value: -0.3 }
        ]
      },
      { Count: 1, list2: [{ Length: 4, Value: 1.5 }] }
    ])

    expect(mapNameKeysToCamelCase(named).fields.list).to.deep.equal(tables)
  })

  it('are written to a C header entry', () => {
    const entry = generatePgnHeaderEntry(
      getPGNWithId('navicoUdbDatabaseTableDump11')!
    )
    expect(entry).to.include('.repeatingCount1 = 3,')
    expect(entry).to.include('.repeatingStart1 = 13,')
    expect(entry).to.include('.repeatingField1 = 255,')
    expect(entry).to.include('.repeatingCount2 = 2,')
    expect(entry).to.include('.repeatingStart2 = 14,')
    expect(entry).to.include('.repeatingField2 = 13,')
    expect(entry).to.include('.repeatingParent2 = 1,')
  })

  it('leave a set 1 count field in a C header entry', () => {
    const entry = generatePgnHeaderEntry(getPGNWithId('gnssSatsInView')!)
    expect(entry).to.include('.repeatingCount1 = 7,')
    expect(entry).to.include('.repeatingStart1 = 5,')
    expect(entry).to.include('.repeatingField1 = 4,')
    expect(entry).not.to.include('repeatingParent2')
  })
})
