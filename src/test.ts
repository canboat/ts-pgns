/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  PGN_65305_Simrad_SendMode,
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

const obj2: PGN_65305_Simrad_SendMode = {
  pgn: 65305,
  dst: 255,
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

function tryIt(pgn: PGN_65305_Simrad_SendMode) {
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
