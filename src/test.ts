/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  PGN_65305_SimnetDeviceModeRequest,
  PGN_65305_SimnetDeviceModeRequestDefaults,
  newPGN_61184_VictronBatteryRegister,
  SimnetDeviceModel,
  SimnetDeviceReport,
  ManufacturerCode,
  IndustryCode
} from './index'

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
const battery = newPGN_61184_VictronBatteryRegister({
  registerId: 1,
  payload: 100
})
console.log(battery)
