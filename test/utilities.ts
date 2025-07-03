import { expect, assert } from 'chai'
import {
  PGN_61184_VictronEnergy,
  PGN_61184_VictronEnergyDefaults,
  PGN_129029,
  PGN_129029Defaults,
  ManufacturerCode,
  IndustryCode
} from '../dist/index'
import { findMatchingDefinition, mapCamelCaseKeys } from '../dist/utilities'

//import { getPGN } from '../dist/index'

describe('utilities tests', () => {
  it(`findMatchingDefinition works`, (done) => {
    const pgn: PGN_61184_VictronEnergy = {
      ...PGN_61184_VictronEnergyDefaults,
      fields: {
        manufacturerCode: ManufacturerCode.VictronEnergy,
        industryCode: IndustryCode.Marine,
        registerId: 1,
        payload: 100
      }
    }

    try {
      const def = findMatchingDefinition(pgn)
      expect(def).to.exist
      expect(def.Description).to.equal('Victron Battery Register')
      done()
    } catch (err) {
      done(err)
    }
  })

  it(`findMatchingDefinition works`, (done) => {
    const pgn: PGN_129029 = {
      ...PGN_129029Defaults,
      fields: {
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
      }
    }

    try {
      const mapped = mapCamelCaseKeys(pgn)
      assert(mapped !== undefined)
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
})
