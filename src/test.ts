/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  PGN_65305_SimnetDeviceModeRequest,
  PGN_61184_VictronVeCanRegister,
  PGN_61184_VictronVeCanRegisterMatchFields,
  SimnetDeviceModel,
  SimnetDeviceReport,
  ManufacturerCode,
  IndustryCode
} from './index'

import { getPGNWithNumber } from './index'

const obj: any = {
  fields: {
    manufacturerCode: 'BEP Marine',
    industryCode: 'Marine',
    'Industry Code': 'Marine',
    model: 'AC',
    report: 'Status'
    //spare6: 1
  }
}

/*
const obj2: PGN_65305_SimnetDeviceModeRequest = {
  ...PGN_65305_SimnetDeviceModeRequestDefaults,
  fields: {
    manufacturerCode: ManufacturerCode.BepMarine,
    industryCode: IndustryCode.Marine,
    model: SimnetDeviceModel.Ac,
    report: SimnetDeviceReport.Status,
    spare6: 1
  }
  }

tryIt(obj)
tryIt(obj2)
  */

function tryIt(pgn: PGN_65305_SimnetDeviceModeRequest) {
  if (pgn.fields.manufacturerCode === ManufacturerCode.BepMarine) {
    console.log(pgn.fields.manufacturerCode)
  }
}

const pgn = getPGNWithNumber(60928)

console.log(JSON.stringify(pgn, null, 2))
if (pgn !== undefined) {
  console.log(pgn[0].TransmissionInterval)
  const inter: number | undefined = pgn[0].TransmissionInterval
  console.log(inter)
}

const b = PGN_65305_SimnetDeviceModeRequest.constructor({
  registerId: 1,
  payload: 100
})

const battery = new PGN_61184_VictronVeCanRegister(
  {
    registerId: 'DC Voltage',
    value: 12.34
  },
  212
)
console.log(battery)
console.log(battery instanceof PGN_61184_VictronVeCanRegister)

console.log((battery as any)['fields'])

/*
function myfunc(): PGN_61184_VictronVeCanRegister {
  return {
    ...PGN_61184_VictronVeCanRegisterDefaults,
    fields: {
      ...PGN_61184_VictronVeCanRegisterMatchFields,
      registerId: 'DC Voltage'
    }
  }
  }

const m = myfunc()
console.log(m instanceof PGN_61184_VictronVeCanRegister)
console.log(m.fields.manufacturerCode)
*/
