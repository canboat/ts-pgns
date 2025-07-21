import { expect, assert } from 'chai'
import {
  PGN,
  PGN_129029,
  PGN_61184_VictronBatteryRegister,
  findMatchingDefinition,
  mapCamelCaseKeys,
  getPGNWithNumber,
  getPGNWithId,
  createPGN,
  mapNameKeysToCamelCase,
  createNmeaGroupFunction,
  GroupFunction,
  PGN_65379_SeatalkPilotMode,
  SeatalkPilotMode16,
  PGN_126208_NmeaCommandGroupFunction,
  Priority
} from '../dist/index'
import { pgnToActisenseSerialFormat } from '@canboat/canboatjs'

//import { create } from 'domain'

describe('utilities tests', () => {
  it(`findMatchingDefinition works`, (done) => {
    const pgn = new PGN_61184_VictronBatteryRegister({
      registerId: 1,
      payload: 100
    })

    try {
      const def = findMatchingDefinition(pgn)
      expect(def).to.exist
      expect(def.Description).to.equal('Victron Battery Register')
      done()
    } catch (err) {
      done(err)
    }
  })

  it(`mapCamelCaseKeys works`, (done) => {
    const pgn = new PGN_129029({
      date: 'date',
      time: 'time',
      latitude: 1,
      longitude: 2,
      gnssType: 3,
      method: 4,
      integrity: 5,
      numberOfSvs: 6,
      hdop: 7,
      geoidalSeparation: 8,
      referenceStations: 2,
      list: [
        {
          referenceStationType: 9,
          referenceStationId: 7
        },
        {
          referenceStationType: 19,
          referenceStationId: 22
        }
      ]
    })

    pgn.dst = 1
    pgn.src = 123

    try {
      const mapped = mapCamelCaseKeys(pgn)
      assert(mapped !== undefined)
      expect(mapped.pgn).to.equal(129029)
      expect(mapped.dst).to.equal(1)
      expect(mapped.prio).to.equal(3)
      expect(mapped.src).to.equal(123)
      expect(mapped.fields).to.exist
      expect(mapped.fields['Date']).to.equal('date')
      expect(mapped.fields['GNSS type']).to.equal(3)
      expect(mapped.fields.list).to.exist
      expect(mapped.fields.list.length).to.equal(2)
      expect(mapped.fields.list[1]['Reference Station Type']).to.equal(19)
      expect(mapped.fields.list[1]['Reference Station ID']).to.equal(22)
      done()
    } catch (err) {
      done(err)
    }
  })

  it(`mapNameKeysToCamelCase works`, (done) => {
    const pgn = {
      pgn: 129029,
      dst: 1,
      prio: 6,
      src: 123,
      fields: {
        Date: 'date',
        Time: 'time',
        Latitude: 1,
        Longitude: 2,
        'GNSS type': 3,
        Method: 4,
        Integrity: 5,
        'Number of SVs': 6,
        HDOP: 7,
        'Geoidal Separation': 8,
        'Reference Stations': 2,
        list: [
          {
            'Reference Station Type': 9,
            'Reference Station ID': 7
          },
          {
            'Reference Station Type': 19,
            'Reference Station ID': 22
          }
        ]
      }
    }

    try {
      const mapped = mapNameKeysToCamelCase(pgn) as PGN_129029
      assert(mapped !== undefined)
      expect(mapped.pgn).to.equal(129029)
      expect(mapped.dst).to.equal(1)
      expect(mapped.prio).to.equal(6)
      expect(mapped.src).to.equal(123)
      expect(mapped.fields).to.exist
      expect(mapped.fields.date).to.equal('date')
      expect(mapped.fields.gnssType).to.equal(3)
      expect(mapped.fields.numberOfSvs).to.equal(6)
      expect(mapped.fields.list).to.exist
      expect(mapped.fields.list.length).to.equal(2)
      expect(mapped.fields.list[1].referenceStationType).to.equal(19)
      expect(mapped.fields.list[1].referenceStationId).to.equal(22)
      done()
    } catch (err) {
      done(err)
    }
  })

  it(`finds pgn 60928`, function (done) {
    const def = getPGNWithNumber(60928)
    assert(def !== undefined)
    assert(def.length === 1)
    assert(def[0].PGN === 60928)
    done()
  })

  it(`finds pgn with id isoAcknowledgement`, function (done) {
    const def = getPGNWithId('isoAcknowledgement')
    assert(def !== undefined)
    assert(def.PGN === 59392)
    done()
  })

  it(`getDefinition works`, function (done) {
    const pgn = createPGN('isoAcknowledgement', {})
    assert(pgn !== undefined)

    const def = pgn.getDefinition()
    assert(def.PGN === 59392)
    done()
  })

  it(`createPGN fails`, function (done) {
    const pgn = createPGN('xxx', {})
    assert(pgn === undefined)
    done()
  })

  it(`createNmeaGroupFunction works`, function (done) {
    const rpgn = new PGN_65379_SeatalkPilotMode({
      pilotMode: SeatalkPilotMode16.AutoCompassCommanded,
      subMode: 0xffff
    })
    const pgn = createNmeaGroupFunction(
      GroupFunction.Command,
      rpgn,
      123
    ) as PGN_126208_NmeaCommandGroupFunction
    pgn.fields.priority = Priority.LeaveUnchanged

    const n2k = pgnToActisenseSerialFormat(pgn)

    expect(pgn.fields.functionCode).to.eq(GroupFunction.Command)
    expect(pgn.fields.pgn).to.eq(rpgn.pgn)

    const expected = [
      { parameter: 1, value: 'Raymarine' },
      { parameter: 3, value: 'Marine Industry' },
      { parameter: 4, value: 'Auto, compass commanded' },
      { parameter: 5, value: 65535 }
    ]
    expect(pgn.fields.list).to.deep.eq(expected)

    expect(n2k.slice('2025-07-21T17:30:30.177Z'.length)).to.eq(
      ',3,126208,0,123,17,01,63,ff,00,f8,04,01,3b,07,03,04,04,40,00,05,ff,ff'
    )
    done()
  })
})
