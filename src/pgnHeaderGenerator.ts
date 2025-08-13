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
  Definition,
  Field,
  FieldType,
  PhysicalQuantity,
  Enumeration,
  BitEnumeration,
  FieldTypeEnumeration
} from './definition'

/**
 * Mapping of PhysicalQuantity to specialized C field macros
 */
const physicalQuantityMapping: Partial<
  Record<PhysicalQuantity, (field: Field) => string>
> = {
  [PhysicalQuantity.Angle]: (field) => {
    if (field.BitLength === 16) {
      return field.Signed ? 'ANGLE_I16_FIELD' : 'ANGLE_U16_FIELD'
    }
    return 'ANGLE_FIELD'
  },
  [PhysicalQuantity.AngularVelocity]: (field) => {
    if (field.BitLength === 16) {
      return 'ROTATION_FIX16_FIELD'
    } else if (field.BitLength === 32) {
      return 'ROTATION_FIX32_FIELD'
    }
    return 'ROTATION_FIELD'
  },
  [PhysicalQuantity.Concentration]: () => 'CONCENTRATION_UINT16_FIELD',
  [PhysicalQuantity.Date]: () => 'DATE_FIELD',
  [PhysicalQuantity.Distance]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1
    const signed = field.Signed || false

    if (bitLength === 16) {
      if (resolution === 1)
        return signed ? 'DISTANCE_FIX16_M_FIELD' : 'DISTANCE_UFIX16_M_FIELD'
      if (resolution === 0.01) return 'DISTANCE_FIX16_CM_FIELD'
      if (resolution === 0.001) return 'DISTANCE_FIX16_MM_FIELD'
    }
    if (bitLength === 24 && resolution === 0.001)
      return 'DISTANCE_FIX24_MM_FIELD'
    if (bitLength === 32) {
      if (resolution === 0.001) return 'DISTANCE_FIX32_MM_FIELD'
      if (resolution === 0.01) return 'DISTANCE_FIX32_CM_FIELD'
      if (resolution === 0.0001) return 'DISTANCE_FIX32_DMM_FIELD'
      if (resolution === 0.000001) return 'DISTANCE_FIX32_MMM_FIELD'
    }
    if (bitLength === 64) return 'DISTANCE_FIX64_FIELD'
    return 'DISTANCE_FIELD'
  },
  [PhysicalQuantity.Duration]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1

    if (bitLength === 8) {
      if (resolution === 0.005) return 'DURATION_UFIX8_5MS_FIELD'
      if (resolution === 60) return 'DURATION_UFIX8_MIN_FIELD'
    } else if (bitLength === 16) {
      if (resolution === 1) return 'DURATION_UFIX16_S_FIELD'
      if (resolution === 60) return 'DURATION_UFIX16_MIN_FIELD'
      if (resolution === 0.001) return 'DURATION_UFIX16_MS_FIELD'
      if (resolution === 0.01) return 'DURATION_UFIX16_CS_FIELD'
      if (resolution === 0.1) return 'DURATION_UFIX16_DS_FIELD'
      if (field.Signed && resolution === 0.05) return 'DURATION_FIX16_5CS_FIELD'
      if (field.Signed && resolution === 60) return 'DURATION_FIX16_MIN_FIELD'
    } else if (bitLength === 24) {
      if (resolution === 0.001) return 'DURATION_UFIX24_MS_FIELD'
    } else if (bitLength === 32) {
      if (resolution === 1) return 'DURATION_UFIX32_S_FIELD'
      if (resolution === 0.001) return 'DURATION_UFIX32_MS_FIELD'
      if (field.Signed && resolution === 0.001) return 'DURATION_FIX32_MS_FIELD'
      if (field.Signed && resolution === 1e-9)
        return 'DURATION_FIX32_NANO_FIELD'
    }
    return 'DURATION_FIELD'
  },
  [PhysicalQuantity.ElectricalApparentPower]: () => 'POWER_U32_VA_FIELD',
  [PhysicalQuantity.ElectricalCharge]: () => 'ELECTRIC_CHARGE_UFIX16_AH',
  [PhysicalQuantity.ElectricalCurrent]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1

    if (bitLength === 8 && resolution === 1) return 'CURRENT_UFIX8_A_FIELD'
    if (bitLength === 16) {
      if (resolution === 1) return 'CURRENT_UFIX16_A_FIELD'
      if (resolution === 0.1)
        return field.Signed
          ? 'CURRENT_FIX16_DA_FIELD'
          : 'CURRENT_UFIX16_DA_FIELD'
    }
    if (bitLength === 24 && resolution === 0.01 && field.Signed)
      return 'CURRENT_FIX24_CA_FIELD'
    return 'CURRENT_FIELD'
  },
  [PhysicalQuantity.ElectricalEnergy]: () => 'ENERGY_UINT32_FIELD',
  [PhysicalQuantity.ElectricalPower]: (field) => {
    const bitLength = field.BitLength || 0
    const signed = field.Signed || false

    if (bitLength === 8) return 'POWER_U8_FIELD'
    if (bitLength === 16) return 'POWER_U16_FIELD'
    if (bitLength === 32) return signed ? 'POWER_I32_FIELD' : 'POWER_U32_FIELD'
    return 'POWER_FIELD'
  },
  [PhysicalQuantity.ElectricalReactivePower]: (field) => {
    const bitLength = field.BitLength || 0
    if (bitLength === 16) return 'POWER_U16_VAR_FIELD'
    if (bitLength === 32) return 'POWER_U32_VAR_FIELD'
    return 'POWER_VAR_FIELD'
  },
  [PhysicalQuantity.Frequency]: () => 'FREQUENCY_FIELD',
  [PhysicalQuantity.GeographicalLatitude]: (field) => {
    const bitLength = field.BitLength || 0
    if (bitLength === 32) return 'LATITUDE_I32_FIELD'
    if (bitLength === 64) return 'LATITUDE_I64_FIELD'
    if (bitLength === 24) return 'LATITUDE_DELTA_I24_FIELD'
    return 'LATITUDE_FIELD'
  },
  [PhysicalQuantity.GeographicalLongitude]: (field) => {
    const bitLength = field.BitLength || 0
    if (bitLength === 32) return 'LONGITUDE_I32_FIELD'
    if (bitLength === 64) return 'LONGITUDE_I64_FIELD'
    if (bitLength === 24) return 'LONGITUDE_DELTA_I24_FIELD'
    return 'LONGITUDE_FIELD'
  },
  [PhysicalQuantity.Length]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1

    if (bitLength === 8 && resolution === 10) return 'LENGTH_UFIX8_DAM_FIELD'
    if (bitLength === 16) {
      if (resolution === 0.01) return 'LENGTH_UFIX16_CM_FIELD'
      if (resolution === 0.1) return 'LENGTH_UFIX16_DM_FIELD'
    }
    if (bitLength === 32) {
      if (resolution === 1) return 'LENGTH_UFIX32_M_FIELD'
      if (resolution === 0.01) return 'LENGTH_UFIX32_CM_FIELD'
      if (resolution === 0.001) return 'LENGTH_UFIX32_MM_FIELD'
    }
    return 'LENGTH_FIELD'
  },
  [PhysicalQuantity.MagneticField]: () => 'MAGNETIC_FIX16_FIELD',
  [PhysicalQuantity.PotentialDifference]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1
    const signed = field.Signed || false

    if (bitLength === 8 && resolution === 0.2)
      return 'VOLTAGE_UFIX8_200MV_FIELD'
    if (bitLength === 16) {
      if (resolution === 1) return 'VOLTAGE_U16_V_FIELD'
      if (resolution === 0.001) return 'VOLTAGE_U16_1MV_FIELD'
      if (resolution === 0.01)
        return signed ? 'VOLTAGE_I16_10MV_FIELD' : 'VOLTAGE_U16_10MV_FIELD'
      if (resolution === 0.05) return 'VOLTAGE_U16_50MV_FIELD'
      if (resolution === 0.1) return 'VOLTAGE_U16_100MV_FIELD'
    }
    return 'VOLTAGE_FIELD'
  },
  [PhysicalQuantity.Pressure]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1
    const signed = field.Signed || false

    if (bitLength === 8) {
      if (resolution === 500) return 'PRESSURE_UINT8_KPA_FIELD'
      if (resolution === 2000) return 'PRESSURE_UINT8_2KPA_FIELD'
    }
    if (bitLength === 16) {
      if (resolution === 100) return 'PRESSURE_UFIX16_HPA_FIELD'
      if (resolution === 1000)
        return signed ? 'PRESSURE_FIX16_KPA_FIELD' : 'PRESSURE_UFIX16_KPA_FIELD'
    }
    if (bitLength === 32) {
      if (resolution === 0.1)
        return signed ? 'PRESSURE_FIX32_DPA_FIELD' : 'PRESSURE_UFIX32_DPA_FIELD'
    }
    return 'PRESSURE_FIELD'
  },
  [PhysicalQuantity.PressureRate]: () => 'PRESSURE_RATE_FIX16_PA_FIELD',
  [PhysicalQuantity.SignalStrength]: () => 'SIGNALSTRENGTH_FIX32_FIELD',
  [PhysicalQuantity.SignalToNoiseRatio]: (field) => {
    return field.Signed
      ? 'SIGNALTONOISERATIO_FIX16_FIELD'
      : 'SIGNALTONOISERATIO_UFIX16_FIELD'
  },
  [PhysicalQuantity.Speed]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1
    const signed = field.Signed || false

    if (bitLength === 16) {
      if (resolution === 0.001)
        return signed ? 'SPEED_I16_MM_FIELD' : 'SPEED_U16_MM_FIELD'
      if (resolution === 0.01)
        return signed ? 'SPEED_I16_CM_FIELD' : 'SPEED_U16_CM_FIELD'
      if (resolution === 0.1) return 'SPEED_U16_DM_FIELD'
      if (resolution === 0.0001) return 'SPEED_I16_DMM_FIELD'
    }
    return 'SPEED_FIELD'
  },
  [PhysicalQuantity.Temperature]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1
    const offset = field.Offset || 0

    if (bitLength === 8 && offset === 233)
      return 'TEMPERATURE_UINT8_OFFSET_FIELD'
    if (bitLength === 16) {
      if (resolution === 0.1) return 'TEMPERATURE_HIGH_FIELD'
      if (resolution === 0.01) return 'TEMPERATURE_FIELD'
      if (field.Signed && resolution === 0.001)
        return 'TEMPERATURE_DELTA_FIX16_FIELD'
    }
    if (bitLength === 24 && resolution === 0.001) return 'TEMPERATURE_U24_FIELD'
    return 'TEMPERATURE_FIELD'
  },
  [PhysicalQuantity.Time]: () => 'TIME_FIELD',
  [PhysicalQuantity.Volume]: (field) => {
    const bitLength = field.BitLength || 0
    const resolution = field.Resolution || 1

    if (bitLength === 16 && resolution === 1) return 'VOLUME_UFIX16_L_FIELD'
    if (bitLength === 32 && resolution === 0.1) return 'VOLUME_UFIX32_DL_FIELD'
    return 'VOLUME_FIELD'
  },
  [PhysicalQuantity.VolumetricFlow]: () => 'VOLUMETRIC_FLOW_FIELD'
}

/**
 * Converts bit length to bytes macro
 */
function bitLengthToBytes(bitLength: number): string {
  if (bitLength % 8 === 0) {
    return `BYTES(${bitLength / 8})`
  }
  return `BITS(${bitLength})`
}

/**
 * Generates a C field definition from a TypeScript Field definition
 */
function generateFieldDefinition(field: Field): string {
  const fieldName = `"${field.Name}"`
  const description = field.Description ? `"${field.Description}"` : 'NULL'

  // Handle Reserved and Spare fields specially
  if (field.FieldType === FieldType.Reserved) {
    const lengthParam = field.BitLength
      ? bitLengthToBytes(field.BitLength)
      : 'BYTES(1)'
    if (field.Description) {
      return `RESERVED_PROP_FIELD(${lengthParam}, ${description})`
    }
    return `RESERVED_FIELD(${lengthParam})`
  }

  if (field.FieldType === FieldType.Spare) {
    const lengthParam = field.BitLength
      ? bitLengthToBytes(field.BitLength)
      : 'BYTES(1)'
    return field.Name !== 'Spare'
      ? `SPARE_NAMED_FIELD(${fieldName}, ${lengthParam})`
      : `SPARE_FIELD(${lengthParam})`
  }

  // Handle lookup fields
  if (field.FieldType === FieldType.Lookup) {
    const lengthParam = field.BitLength
      ? bitLengthToBytes(field.BitLength)
      : 'BYTES(1)'
    const lookupType = field.LookupEnumeration || 'UNKNOWN_LOOKUP'
    const primaryKey = field.PartOfPrimaryKey ? 'PK(' : ''
    const primaryKeyClose = field.PartOfPrimaryKey ? ')' : ''

    if (field.Match !== undefined) {
      return `MATCH_LOOKUP_FIELD(${primaryKey}${fieldName}${primaryKeyClose}, ${lengthParam}, ${field.Match}, ${lookupType})`
    } else {
      if (field.Description) {
        return `LOOKUP_FIELD_DESC(${primaryKey}${fieldName}${primaryKeyClose}, ${lengthParam}, ${lookupType}, ${description})`
      }

      return `LOOKUP_FIELD(${primaryKey}${fieldName}${primaryKeyClose}, ${lengthParam}, ${lookupType})`
    }
  }

  // Handle BitLookup fields
  if (field.FieldType === FieldType.BitLookup) {
    const lengthParam = field.BitLength
      ? bitLengthToBytes(field.BitLength)
      : 'BYTES(1)'
    const lookupType = field.LookupBitEnumeration || 'UNKNOWN_BIT_LOOKUP'
    return `BITLOOKUP_FIELD(${fieldName}, ${lengthParam}, ${lookupType})`
  }

  // Handle special physical quantity mappings
  if (
    field.PhysicalQuantity &&
    physicalQuantityMapping[field.PhysicalQuantity]
  ) {
    const mappingFunction = physicalQuantityMapping[field.PhysicalQuantity]
    if (mappingFunction) {
      const fieldMacro = mappingFunction(field)

      if (fieldMacro.includes('_FIELD')) {
        return `${fieldMacro}(${fieldName}${description !== 'NULL' ? ', ' + description : ''})`
      }
    }
  }

  // Handle specific field types
  switch (field.FieldType) {
    case FieldType.PGN:
      return `PGN_FIELD(${fieldName}, ${description})`

    case FieldType.MMSI:
      return `MMSI_FIELD(${fieldName})`

    case FieldType.IsoName:
      return `ISO_NAME_FIELD(${fieldName})`

    case FieldType.Date:
      return `DATE_FIELD(${fieldName})`

    case FieldType.Time:
      return `TIME_FIELD(${fieldName})`

    case FieldType.Binary:
      const binaryLengthParam = field.BitLength
        ? bitLengthToBytes(field.BitLength)
        : 'BYTES(1)'
      return `BINARY_FIELD(${fieldName}, ${binaryLengthParam}, ${description})`

    case FieldType.StringFix:
      const strLengthParam = field.BitLength
        ? `BYTES(${field.BitLength / 8})`
        : 'BYTES(1)'
      return `STRING_FIX_FIELD(${fieldName}, ${strLengthParam})`

    case FieldType.StringLZ:
      return field.BitLengthVariable
        ? `STRINGVAR_FIELD(${fieldName})`
        : `STRINGLZ_FIELD(${fieldName}, BYTES(${(field.BitLength || 8) / 8}))`

    case FieldType.StringLAU:
      return `STRINGLAU_FIELD(${fieldName})`

    case FieldType.Variable:
      return `VARIABLE_FIELD(${fieldName}, ${description})`

    case FieldType.Float:
      const unit = field.Unit ? `"${field.Unit}"` : 'NULL'
      return `FLOAT_FIELD(${fieldName}, ${unit}, ${description})`

    case FieldType.Decimal:
      const decimalLength = field.BitLength ? field.BitLength / 4 : 2 // 4 bits per decimal digit
      return `DECIMAL_FIELD(${fieldName}, ${decimalLength}, ${description})`

    case FieldType.Number:
    default:
      // Handle generic integer fields
      const bitLength = field.BitLength || 8
      const primaryKeyPrefix = field.PartOfPrimaryKey ? 'PK(' : ''
      const primaryKeySuffix = field.PartOfPrimaryKey ? ')' : ''

      if (bitLength === 8) {
        if (field.Signed) {
          return `SIGNED_INTEGER_UNIT_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix}, BYTES(1), ${field.Unit ? `"${field.Unit}"` : 'NULL'})`
        }
        return description !== 'NULL'
          ? `UINT8_DESC_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix}, ${description})`
          : `UINT8_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix})`
      }

      if (bitLength === 16) {
        return description !== 'NULL'
          ? `UINT16_DESC_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix}, ${description})`
          : `UINT16_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix})`
      }

      if (bitLength === 32) {
        if (field.Signed) {
          return `INT32_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix}, ${description})`
        }
        return description !== 'NULL'
          ? `UINT32_DESC_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix}, ${description})`
          : `UINT32_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix})`
      }

      // Generic case for other bit lengths
      const genericLengthParam = bitLengthToBytes(bitLength)
      if (field.Signed) {
        return `SIMPLE_SIGNED_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix}, ${genericLengthParam})`
      }
      return `SIMPLE_FIELD(${primaryKeyPrefix}${fieldName}${primaryKeySuffix}, ${genericLengthParam})`
  }
}

/**
 * Converts TypeScript Type enum to C packet type
 */
function getPacketType(type: string): string {
  switch (type.toLowerCase()) {
    case 'single':
      return 'PACKET_SINGLE'
    case 'fast':
      return 'PACKET_FAST'
    case 'iso':
      return 'PACKET_ISO_TP'
    default:
      return 'PACKET_SINGLE'
  }
}

/**
 * Generates a complete pgn.h entry from a PGN Definition
 *
 * @param definition - The PGN definition from TypeScript
 * @returns A C struct entry formatted for pgn.h
 */
export function generatePgnHeaderEntry(definition: Definition): string {
  const lines: string[] = []

  // Start with comment if there's an explanation or URL
  if (definition.Explanation || definition.URL) {
    lines.push('    /* ' + (definition.Explanation || ''))
    if (definition.URL) {
      lines.push('     * ' + definition.URL)
    }
    lines.push('     */')
  }

  // Start the PGN definition
  lines.push('    ,')
  lines.push(`    {"${definition.Description}",`)
  lines.push(`     ${definition.PGN},`)

  // Completeness status
  const complete = definition.Complete ? 'PACKET_COMPLETE' : 'PACKET_INCOMPLETE'
  lines.push(`     ${complete},`)

  // Packet type
  const packetType = getPacketType(definition.Type)
  lines.push(`     ${packetType},`)
  
  let fields = definition.Fields
  let isCompany = false
  if (
    definition.Fields.length > 2 &&
    definition.Fields[0].Id === 'manufacturerCode' &&
    definition.Fields[1].Id === 'reserved' &&
    definition.Fields[2].Id === 'industryCode'
  ) {
    isCompany = true
    const code = fields[0].Match
    lines.push(`     {COMPANY(${code}),`)
    fields = fields.slice(3)
  }

  // Fields array
  lines.push(
    ( isCompany ? '      ' : `     {`) +
      fields.map((field) => generateFieldDefinition(field)).join(',\n      ') +
      ','
  )
  lines.push('      END_OF_FIELDS},')

  // Priority
  if (definition.Priority !== undefined) {
    lines.push(`     .priority = ${definition.Priority},`)
  }

  // Transmission interval
  if (definition.TransmissionInterval !== undefined) {
    lines.push(`     .interval = ${definition.TransmissionInterval},`)
  } else if (definition.TransmissionIrregular) {
    lines.push('     .interval = UINT16_MAX,')
  }

  // URL
  if (definition.URL) {
    lines.push(`     .url = "${definition.URL}",`)
  }

  // Explanation
  if (definition.Explanation) {
    // Handle multi-line explanations
    const explanation = definition.Explanation.replace(/"/g, '\\"')
    if (explanation.length > 80) {
      // Split long explanations
      const words = explanation.split(' ')
      let currentLine = ''
      const explanationLines: string[] = []

      for (const word of words) {
        if (currentLine.length + word.length + 1 > 80) {
          explanationLines.push(currentLine.trim())
          currentLine = word + ' '
        } else {
          currentLine += word + ' '
        }
      }
      if (currentLine.trim()) {
        explanationLines.push(currentLine.trim())
      }

      lines.push(`     .explanation = "${explanationLines.join('" \\n"')}"`)
    } else {
      lines.push(`     .explanation = "${explanation}"`)
    }
  }

  // Repeating field information
  if (definition.RepeatingFieldSet1Size) {
    lines.push(`     .repeatingField1 = ${definition.RepeatingFieldSet1Size},`)
  }
  if (definition.RepeatingFieldSet1CountField) {
    lines.push(
      `     .repeatingCount1 = ${definition.RepeatingFieldSet1CountField},`
    )
  }
  if (definition.RepeatingFieldSet1StartField) {
    lines.push(
      `     .repeatingStart1 = ${definition.RepeatingFieldSet1StartField}`
    )
  }

  // Close the struct definition
  lines.push('    }')

  return lines.join('\n')
}

/**
 * Generates multiple PGN header entries from an array of definitions
 *
 * @param definitions - Array of PGN definitions
 * @returns A string containing all the formatted C entries
 */
export function generateMultiplePgnHeaderEntries(
  definitions: Definition[]
): string {
  return definitions.map((def) => generatePgnHeaderEntry(def)).join('\n\n')
}

/**
 * Converts a bit count to the appropriate C macro for lookup.h
 */
function bitsToLookupMacro(bits: number): string {
  if (bits % 8 === 0) {
    return `BYTES(${bits / 8})`
  }
  return `BITS(${bits})`
}

/**
 * Generates a lookup.h entry from an Enumeration definition
 *
 * @param enumeration - The enumeration definition from TypeScript
 * @returns A C lookup entry formatted for lookup.h
 */
export function generateLookupHeaderEntry(enumeration: Enumeration): string {
  const lines: string[] = []

  // Calculate bits needed based on MaxValue
  const bitsNeeded = Math.ceil(Math.log2(enumeration.MaxValue + 1))
  const sizeMacro = bitsToLookupMacro(bitsNeeded)

  // Start with the lookup type declaration
  lines.push(`LOOKUP_TYPE(${enumeration.Name}, ${sizeMacro})`)

  // Add all enumeration values
  for (const enumValue of enumeration.EnumValues) {
    lines.push(
      `LOOKUP(${enumeration.Name}, ${enumValue.Value}, "${enumValue.Name}")`
    )
  }

  // End the lookup
  lines.push('LOOKUP_END')

  return lines.join('\n')
}

/**
 * Generates a lookup.h bitfield entry from a BitEnumeration definition
 *
 * @param bitEnumeration - The bit enumeration definition from TypeScript
 * @returns A C bitfield lookup entry formatted for lookup.h
 */
export function generateBitLookupHeaderEntry(
  bitEnumeration: BitEnumeration
): string {
  const lines: string[] = []

  // Calculate maximum bit position to determine size
  const maxBit = Math.max(...bitEnumeration.EnumBitValues.map((v) => v.Bit))
  const bitsNeeded = maxBit + 1
  const sizeMacro = bitsToLookupMacro(bitsNeeded)

  // Start with the bitfield lookup type declaration
  lines.push(`LOOKUP_TYPE_BITFIELD(${bitEnumeration.Name}, ${sizeMacro})`)

  // Add all bit enumeration values
  for (const bitValue of bitEnumeration.EnumBitValues) {
    lines.push(
      `LOOKUP_BITFIELD(${bitEnumeration.Name}, ${bitValue.Bit}, "${bitValue.Name}")`
    )
  }

  // End the lookup
  lines.push('LOOKUP_END')

  return lines.join('\n')
}

/**
 * Generates a lookup.h fieldtype entry from a FieldTypeEnumeration definition
 *
 * @param fieldTypeEnumeration - The field type enumeration definition from TypeScript
 * @returns A C fieldtype lookup entry formatted for lookup.h
 */
export function generateFieldTypeLookupHeaderEntry(
  fieldTypeEnumeration: FieldTypeEnumeration
): string {
  const lines: string[] = []

  // Parse the bits from the first entry to determine size
  const firstEntry = fieldTypeEnumeration.EnumFieldTypeValues[0]
  let sizeMacro = 'BYTES(2)' // default

  if (firstEntry && firstEntry.Bits) {
    try {
      const bits = parseInt(firstEntry.Bits)
      sizeMacro = bitsToLookupMacro(bits)
    } catch {
      // Use default if parsing fails
    }
  }

  // Start with the fieldtype lookup type declaration
  lines.push(
    `LOOKUP_TYPE_FIELDTYPE(${fieldTypeEnumeration.Name}, ${sizeMacro})`
  )

  // Add all field type enumeration values
  for (const fieldTypeValue of fieldTypeEnumeration.EnumFieldTypeValues) {
    const fieldType = `"${fieldTypeValue.FieldType}"`

    // Check if this is a lookup type that needs special handling
    if (
      fieldTypeValue.FieldType === 'LOOKUP' &&
      fieldTypeValue.name.includes('_')
    ) {
      // This might be a lookup reference - use LOOKUP_FIELDTYPE_LOOKUP
      const lookupName = fieldTypeValue.name.toUpperCase().replace(' ', '_')
      lines.push(
        `LOOKUP_FIELDTYPE_LOOKUP(${fieldTypeEnumeration.Name}, ${fieldTypeValue.value}, "${fieldTypeValue.name}", "LOOKUP", ${fieldTypeValue.Bits || '8'}, PAIR, ${lookupName})`
      )
    } else if (fieldTypeValue.FieldType === 'BITLOOKUP') {
      // This is a bit lookup reference - use LOOKUP_FIELDTYPE_LOOKUP
      const lookupName = fieldTypeValue.name.toUpperCase().replace(' ', '_')
      lines.push(
        `LOOKUP_FIELDTYPE_LOOKUP(${fieldTypeEnumeration.Name}, ${fieldTypeValue.value}, "${fieldTypeValue.name}", "BITLOOKUP", ${fieldTypeValue.Bits || '8'}, BIT, ${lookupName})`
      )
    } else {
      // Regular field type
      lines.push(
        `LOOKUP_FIELDTYPE(${fieldTypeEnumeration.Name}, ${fieldTypeValue.value}, "${fieldTypeValue.name}", ${fieldType})`
      )
    }
  }

  // End the lookup
  lines.push('LOOKUP_END')

  return lines.join('\n')
}

/**
 * Generates multiple lookup entries from arrays of enumeration definitions
 *
 * @param enumerations - Array of Enumeration definitions
 * @param bitEnumerations - Array of BitEnumeration definitions
 * @param fieldTypeEnumerations - Array of FieldTypeEnumeration definitions
 * @returns A string containing all formatted lookup entries
 */
export function generateMultipleLookupEntries(
  enumerations: Enumeration[] = [],
  bitEnumerations: BitEnumeration[] = [],
  fieldTypeEnumerations: FieldTypeEnumeration[] = []
): string {
  const entries: string[] = []

  // Add regular enumerations
  for (const enumeration of enumerations) {
    entries.push(generateLookupHeaderEntry(enumeration))
  }

  // Add bit enumerations
  for (const bitEnumeration of bitEnumerations) {
    entries.push(generateBitLookupHeaderEntry(bitEnumeration))
  }

  // Add field type enumerations
  for (const fieldTypeEnumeration of fieldTypeEnumerations) {
    entries.push(generateFieldTypeLookupHeaderEntry(fieldTypeEnumeration))
  }

  return entries.join('\n\n')
}
