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

import {
  generatePgnHeaderEntry,
  generateMultiplePgnHeaderEntries
} from './pgnHeaderGenerator'
import { Definition, Type, FieldType, PhysicalQuantity } from './definition'

// Example PGN definition for Wind Data (PGN 130306)
const windDataPgn: Definition = {
  PGN: 130306,
  Id: 'windData',
  Description: 'Wind Data',
  Complete: true,
  Type: Type.Single,
  Priority: 2,
  TransmissionInterval: 100,
  URL: 'http://askjackrabbit.typepad.com/ask_jack_rabbit/page/7/',
  Fields: [
    {
      Id: 'sid',
      Name: 'SID',
      Description: 'Sequence identifier',
      BitOffset: 0,
      BitStart: 0,
      BitLength: 8,
      FieldType: FieldType.Number,
      LookupFieldTypeEnumeration: 'UINT8'
    },
    {
      Id: 'windSpeed',
      Name: 'Wind Speed',
      Description: 'Wind speed measurement',
      BitOffset: 8,
      BitStart: 0,
      BitLength: 16,
      Resolution: 0.01,
      Unit: 'm/s',
      FieldType: FieldType.Number,
      PhysicalQuantity: PhysicalQuantity.Speed,
      LookupFieldTypeEnumeration: 'SPEED_UFIX16_CM'
    },
    {
      Id: 'windAngle',
      Name: 'Wind Angle',
      Description: 'Wind angle relative to vessel heading',
      BitOffset: 24,
      BitStart: 0,
      BitLength: 16,
      Resolution: 0.0001,
      Unit: 'rad',
      FieldType: FieldType.Number,
      PhysicalQuantity: PhysicalQuantity.Angle,
      LookupFieldTypeEnumeration: 'ANGLE_UFIX16'
    },
    {
      Id: 'reference',
      Name: 'Reference',
      Description: 'Reference for wind measurement',
      BitOffset: 40,
      BitStart: 0,
      BitLength: 3,
      FieldType: FieldType.Lookup,
      PartOfPrimaryKey: true,
      LookupEnumeration: 'WIND_REFERENCE',
      LookupFieldTypeEnumeration: 'LOOKUP'
    },
    {
      Id: 'reserved',
      Name: 'Reserved',
      Description: 'Reserved field',
      BitOffset: 43,
      BitStart: 3,
      BitLength: 21, // 5 bits + 2 bytes
      FieldType: FieldType.Reserved,
      LookupFieldTypeEnumeration: 'RESERVED'
    }
  ]
}

// Example PGN definition for System Time (PGN 126992)
const systemTimePgn: Definition = {
  PGN: 126992,
  Id: 'systemTime',
  Description: 'System Time',
  Complete: true,
  Type: Type.Single,
  Priority: 3,
  TransmissionInterval: 1000,
  Explanation:
    'The purpose of this PGN is twofold: To provide a regular transmission of UTC time and date. To provide synchronism for measurement data.',
  Fields: [
    {
      Id: 'sid',
      Name: 'SID',
      Description:
        'An upward counting number used to tie related information together between different PGNs. For example the SID would be used to tie together the COG, SOG and RAIM values to a given position.',
      BitOffset: 0,
      BitStart: 0,
      BitLength: 8,
      FieldType: FieldType.Number,
      LookupFieldTypeEnumeration: 'UINT8'
    },
    {
      Id: 'source',
      Name: 'Source',
      Description: 'Time source reference',
      BitOffset: 8,
      BitStart: 0,
      BitLength: 4,
      FieldType: FieldType.Lookup,
      PartOfPrimaryKey: true,
      LookupEnumeration: 'SYSTEM_TIME',
      LookupFieldTypeEnumeration: 'LOOKUP'
    },
    {
      Id: 'reserved1',
      Name: 'Reserved',
      BitOffset: 12,
      BitStart: 4,
      BitLength: 4,
      FieldType: FieldType.Reserved,
      LookupFieldTypeEnumeration: 'RESERVED'
    },
    {
      Id: 'date',
      Name: 'Date',
      Description: 'Days since January 1, 1970',
      BitOffset: 16,
      BitStart: 0,
      BitLength: 16,
      Unit: 'd',
      FieldType: FieldType.Date,
      LookupFieldTypeEnumeration: 'DATE'
    },
    {
      Id: 'time',
      Name: 'Time',
      Description: 'Seconds since midnight',
      BitOffset: 32,
      BitStart: 0,
      BitLength: 32,
      Unit: 's',
      Resolution: 0.0001,
      FieldType: FieldType.Time,
      LookupFieldTypeEnumeration: 'TIME'
    }
  ]
}

// Example usage
function demonstratePgnHeaderGeneration() {
  console.log('=== Wind Data PGN Header Entry ===')
  console.log(generatePgnHeaderEntry(windDataPgn))

  console.log('\n\n=== System Time PGN Header Entry ===')
  console.log(generatePgnHeaderEntry(systemTimePgn))

  console.log('\n\n=== Multiple PGN Header Entries ===')
  console.log(generateMultiplePgnHeaderEntries([windDataPgn, systemTimePgn]))
}

// Export the example function for use
export { demonstratePgnHeaderGeneration, windDataPgn, systemTimePgn }

// If running directly, execute the demonstration
if (require.main === module) {
  demonstratePgnHeaderGeneration()
}
