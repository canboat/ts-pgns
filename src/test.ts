/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  PGN_65305_SimnetDeviceModeRequest,
  PGN_65305_SimnetDeviceModeRequestDefaults,
  PGN_61184_VictronBatteryRegister,
  PGN_61184_VictronBatteryRegisterFields,
  PGN_61184_VictronBatteryRegisterDefaults,
  PGN_61184_VictronBatteryRegisterMatchFields,
  PGNFields,
  SimnetDeviceModel,
  SimnetDeviceReport,
  ManufacturerCode,
  IndustryCode
} from './index'

const p: PGN_61184_VictronBatteryRegisterFields = {
  manufacturerCode: 1,
  industryCode: 2
}

const f: PGNFields = p

import { getPGN } from './index'

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

function tryIt(pgn: PGN_65305_SimnetDeviceModeRequest) {
  if (pgn.fields.manufacturerCode === ManufacturerCode.BepMarine) {
    console.log(pgn.fields.manufacturerCode)
  }
}

const pgn = getPGN(60928)

console.log(JSON.stringify(pgn, null, 2))
if (pgn !== undefined) {
  console.log(pgn[0].TransmissionInterval)
  const inter: number | undefined = pgn[0].TransmissionInterval
  console.log(inter)
}

const battery = new PGN_61184_VictronBatteryRegister(
  {
    registerId: 1,
    payload: 100
  },
  212
)
console.log(battery)
console.log(battery instanceof PGN_61184_VictronBatteryRegister)

console.log((battery as any)['fields'])

function myfunc(): PGN_61184_VictronBatteryRegister {
  return {
    ...PGN_61184_VictronBatteryRegisterDefaults,
    fields: {
      ...PGN_61184_VictronBatteryRegisterMatchFields,
      registerId: 1
    }
  }
}

const m = myfunc()
console.log(m instanceof PGN_61184_VictronBatteryRegister)
console.log(m.fields.manufacturerCode)
