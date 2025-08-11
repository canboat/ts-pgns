import { expect } from 'chai'
import { 
  getPGNWithNumber, 
  generatePgnHeaderEntry, 
  generateMultiplePgnHeaderEntries,
  generateLookupHeaderEntry,
  generateBitLookupHeaderEntry,
  generateFieldTypeLookupHeaderEntry,
  generateMultipleLookupEntries,
  getEnumerations,
  getBitEnumerations,
  getFieldTypeEnumerations,
  Definition,
  Enumeration,
  BitEnumeration,
  FieldTypeEnumeration
} from '../dist/index'

describe('header generator', () => {
  let systemTimePgn: Definition
  let windDataPgn: Definition

  before(() => {
    // Setup test data
    const systemTimePgns = getPGNWithNumber(126992)
    const windDataPgns = getPGNWithNumber(130306)

    if (systemTimePgns && systemTimePgns.length > 0) {
      systemTimePgn = systemTimePgns[0]
    }

    if (windDataPgns && windDataPgns.length > 0) {
      windDataPgn = windDataPgns[0]
    }
  })

  describe('generatePgnHeaderEntry', () => {
    it('should generate a valid C header entry for System Time PGN', () => {
      expect(systemTimePgn).to.exist
      expect(systemTimePgn.PGN).to.equal(126992)
      expect(systemTimePgn.Description).to.equal('System Time')

      const result = generatePgnHeaderEntry(systemTimePgn)
      
      // Check that the result contains expected C structure elements
      expect(result).to.include('{"System Time",')
      expect(result).to.include('126992,')
      expect(result).to.include('PACKET_COMPLETE')
      expect(result).to.include('PACKET_SINGLE')
      expect(result).to.include('END_OF_FIELDS}')
      expect(result).to.include('.priority = 3')
      expect(result).to.include('.interval = 1000')
      
      // Check for field definitions
      expect(result).to.include('SID')
      expect(result).to.include('Source')
      expect(result).to.include('Date')
      expect(result).to.include('Time')
      expect(result).to.include('RESERVED_FIELD')
    })

    it('should generate a valid C header entry for Wind Data PGN', () => {
      expect(windDataPgn).to.exist
      expect(windDataPgn.PGN).to.equal(130306)
      expect(windDataPgn.Description).to.equal('Wind Data')

      const result = generatePgnHeaderEntry(windDataPgn)
      
      // Check that the result contains expected C structure elements
      expect(result).to.include('{"Wind Data",')
      expect(result).to.include('130306,')
      expect(result).to.include('PACKET_COMPLETE')
      expect(result).to.include('PACKET_SINGLE')
      expect(result).to.include('END_OF_FIELDS}')
      expect(result).to.include('.priority = 2')
      expect(result).to.include('.interval = 100')
      
      // Check for field definitions
      expect(result).to.include('SID')
      expect(result).to.include('Wind Speed')
      expect(result).to.include('Wind Angle')
      expect(result).to.include('Reference')
    })

    it('should handle PGN with explanation and URL', () => {
      const result = generatePgnHeaderEntry(systemTimePgn)
      
      if (systemTimePgn.Explanation) {
        expect(result).to.include('.explanation =')
      }
      
      if (systemTimePgn.URL) {
        expect(result).to.include('.url =')
      }
    })

    it('should properly format field types', () => {
      const result = generatePgnHeaderEntry(windDataPgn)
      
      // Check that field macros are properly generated
      expect(result).to.match(/\w+_FIELD\s*\(/g)
      
      // Should contain proper field closing
      expect(result).to.include('END_OF_FIELDS}')
    })

    it('should handle primary key fields correctly', () => {
      const result = generatePgnHeaderEntry(systemTimePgn)
      
      // Check for PK macro usage (if the PGN has primary key fields)
      // This is a basic check since the specific field depends on the PGN definition
      expect(result).to.be.a('string')
      expect(result.length).to.be.greaterThan(100)
    })

    it('should handle reserved fields', () => {
      const result = generatePgnHeaderEntry(windDataPgn)
      
      // Should contain RESERVED_FIELD macro
      expect(result).to.include('RESERVED_FIELD')
    })

    it('should format packet completeness correctly', () => {
      const result = generatePgnHeaderEntry(systemTimePgn)
      
      if (systemTimePgn.Complete) {
        expect(result).to.include('PACKET_COMPLETE')
      } else {
        expect(result).to.include('PACKET_INCOMPLETE')
      }
    })

    it('should format packet type correctly', () => {
      const result = generatePgnHeaderEntry(systemTimePgn)
      
      switch (systemTimePgn.Type.toLowerCase()) {
        case 'single':
          expect(result).to.include('PACKET_SINGLE')
          break
        case 'fast':
          expect(result).to.include('PACKET_FAST')
          break
        case 'iso':
          expect(result).to.include('PACKET_ISO_TP')
          break
        default:
          expect(result).to.include('PACKET_SINGLE')
      }
    })
  })

  describe('generateMultiplePgnHeaderEntries', () => {
    it('should generate multiple PGN entries separated by newlines', () => {
      const pgns = [systemTimePgn, windDataPgn].filter(Boolean)
      
      if (pgns.length >= 2) {
        const result = generateMultiplePgnHeaderEntries(pgns)
        
        // Should contain both PGN entries
        expect(result).to.include('System Time')
        expect(result).to.include('Wind Data')
        expect(result).to.include('126992')
        expect(result).to.include('130306')
        
        // Should be properly formatted with C structure separators
        expect(result).to.include('}\n\n    ')  // Should have proper spacing between entries
      } else {
        // Skip test if we don't have both PGNs
        console.log('Skipping multiple PGN test - insufficient test data')
      }
    })

    it('should handle empty array', () => {
      const result = generateMultiplePgnHeaderEntries([])
      expect(result).to.equal('')
    })

    it('should handle single PGN in array', () => {
      const result = generateMultiplePgnHeaderEntries([systemTimePgn])
      expect(result).to.include('System Time')
      expect(result).to.include('126992')
    })
  })

  describe('Field type mapping', () => {
    it('should generate proper field macros based on field types', () => {
      const result = generatePgnHeaderEntry(systemTimePgn)
      
      // Check for common field types
      const fieldMacroPatterns = [
        /UINT8_FIELD/,
        /UINT16_FIELD/,
        /DATE_FIELD/,
        /TIME_FIELD/,
        /LOOKUP_FIELD/,
        /RESERVED_FIELD/
      ]
      
      let foundMacros = 0
      fieldMacroPatterns.forEach(pattern => {
        if (pattern.test(result)) {
          foundMacros++
        }
      })
      
      // Should have at least some field macros
      expect(foundMacros).to.be.greaterThan(0)
    })
  })

  describe('Error handling', () => {
    it('should handle PGN with minimal fields', () => {
      // Create a minimal PGN definition for testing
      const minimalPgn: Definition = {
        PGN: 999999,
        Id: 'testPgn',
        Description: 'Test PGN',
        Complete: true,
        Type: 'Single' as any,
        Priority: 7,
        Fields: []
      }
      
      const result = generatePgnHeaderEntry(minimalPgn)
      expect(result).to.include('Test PGN')
      expect(result).to.include('999999')
      expect(result).to.include('END_OF_FIELDS}')
    })
  })

  describe('generateLookupHeaderEntry', () => {
    let testEnumeration: Enumeration

    before(() => {
      // Find a suitable enumeration for testing
      const enumerations = getEnumerations()
      testEnumeration = enumerations.find(e => e.Name === 'INDUSTRY_CODE') || enumerations[0]
    })

    it('should generate a valid C lookup entry', () => {
      expect(testEnumeration).to.exist
      
      const result = generateLookupHeaderEntry(testEnumeration)
      
      // Check basic structure
      expect(result).to.include(`LOOKUP_TYPE(${testEnumeration.Name},`)
      expect(result).to.include('LOOKUP_END')
      
      // Check that enumeration values are included
      testEnumeration.EnumValues.forEach(enumValue => {
        expect(result).to.include(`LOOKUP(${testEnumeration.Name}, ${enumValue.Value}, "${enumValue.Name}")`)
      })
    })

    it('should use correct bit sizing for lookup types', () => {
      const result = generateLookupHeaderEntry(testEnumeration)
      
      // Should contain either BITS() or BYTES() macro
      expect(result).to.match(/(BITS|BYTES)\(\d+\)/)
    })

    it('should handle custom enumeration with specific values', () => {
      const customEnum: Enumeration = {
        Name: 'TEST_ENUM',
        MaxValue: 7,
        EnumValues: [
          { Name: 'Value One', Value: 0 },
          { Name: 'Value Two', Value: 1 },
          { Name: 'Value Three', Value: 7 }
        ]
      }
      
      const result = generateLookupHeaderEntry(customEnum)
      
      expect(result).to.include('LOOKUP_TYPE(TEST_ENUM,')
      expect(result).to.include('LOOKUP(TEST_ENUM, 0, "Value One")')
      expect(result).to.include('LOOKUP(TEST_ENUM, 1, "Value Two")')
      expect(result).to.include('LOOKUP(TEST_ENUM, 7, "Value Three")')
      expect(result).to.include('LOOKUP_END')
    })
  })

  describe('generateBitLookupHeaderEntry', () => {
    let testBitEnumeration: BitEnumeration

    before(() => {
      // Find a suitable bit enumeration for testing
      const bitEnumerations = getBitEnumerations()
      testBitEnumeration = bitEnumerations[0]
    })

    it('should generate a valid C bitfield lookup entry', () => {
      if (!testBitEnumeration) {
        console.log('No bit enumerations available for testing')
        return
      }

      const result = generateBitLookupHeaderEntry(testBitEnumeration)
      
      // Check basic structure
      expect(result).to.include(`LOOKUP_TYPE_BITFIELD(${testBitEnumeration.Name},`)
      expect(result).to.include('LOOKUP_END')
      
      // Check that bit enumeration values are included
      testBitEnumeration.EnumBitValues.forEach(bitValue => {
        expect(result).to.include(`LOOKUP_BITFIELD(${testBitEnumeration.Name}, ${bitValue.Bit}, "${bitValue.Name}")`)
      })
    })

    it('should handle custom bit enumeration', () => {
      const customBitEnum: BitEnumeration = {
        Name: 'TEST_BIT_ENUM',
        MaxValue: 15,
        EnumBitValues: [
          { Name: 'Bit Zero', Bit: 0 },
          { Name: 'Bit Two', Bit: 2 },
          { Name: 'Bit Seven', Bit: 7 }
        ]
      }
      
      const result = generateBitLookupHeaderEntry(customBitEnum)
      
      expect(result).to.include('LOOKUP_TYPE_BITFIELD(TEST_BIT_ENUM,')
      expect(result).to.include('LOOKUP_BITFIELD(TEST_BIT_ENUM, 0, "Bit Zero")')
      expect(result).to.include('LOOKUP_BITFIELD(TEST_BIT_ENUM, 2, "Bit Two")')
      expect(result).to.include('LOOKUP_BITFIELD(TEST_BIT_ENUM, 7, "Bit Seven")')
      expect(result).to.include('LOOKUP_END')
    })

    it('should calculate correct bit sizing', () => {
      const customBitEnum: BitEnumeration = {
        Name: 'TEST_SIZE_ENUM',
        MaxValue: 255,
        EnumBitValues: [
          { Name: 'High Bit', Bit: 15 }
        ]
      }
      
      const result = generateBitLookupHeaderEntry(customBitEnum)
      
      // Should use BYTES(2) for 16 bits
      expect(result).to.include('BYTES(2)')
    })
  })

  describe('generateFieldTypeLookupHeaderEntry', () => {
    let testFieldTypeEnumeration: FieldTypeEnumeration

    before(() => {
      // Find a suitable field type enumeration for testing
      const fieldTypeEnumerations = getFieldTypeEnumerations()
      testFieldTypeEnumeration = fieldTypeEnumerations[0]
    })

    it('should generate a valid C fieldtype lookup entry', () => {
      if (!testFieldTypeEnumeration) {
        console.log('No field type enumerations available for testing')
        return
      }

      const result = generateFieldTypeLookupHeaderEntry(testFieldTypeEnumeration)
      
      // Check basic structure
      expect(result).to.include(`LOOKUP_TYPE_FIELDTYPE(${testFieldTypeEnumeration.Name},`)
      expect(result).to.include('LOOKUP_END')
      
      // Should contain LOOKUP_FIELDTYPE entries
      expect(result).to.include('LOOKUP_FIELDTYPE(')
    })

    it('should handle custom field type enumeration', () => {
      const customFieldTypeEnum: FieldTypeEnumeration = {
        Name: 'TEST_FIELDTYPE_ENUM',
        MaxValue: 255,
        EnumFieldTypeValues: [
          { 
            name: 'Temperature',
            value: 1,
            FieldType: 'TEMPERATURE',
            Bits: '16'
          },
          {
            name: 'Pressure', 
            value: 2,
            FieldType: 'PRESSURE_UFIX16_HPA',
            Resolution: 100,
            Unit: 'Pa',
            Bits: '16'
          }
        ]
      }
      
      const result = generateFieldTypeLookupHeaderEntry(customFieldTypeEnum)
      
      expect(result).to.include('LOOKUP_TYPE_FIELDTYPE(TEST_FIELDTYPE_ENUM,')
      expect(result).to.include('LOOKUP_FIELDTYPE(TEST_FIELDTYPE_ENUM, 1, "Temperature", "TEMPERATURE")')
      expect(result).to.include('LOOKUP_FIELDTYPE(TEST_FIELDTYPE_ENUM, 2, "Pressure", "PRESSURE_UFIX16_HPA")')
      expect(result).to.include('LOOKUP_END')
    })
  })

  describe('generateMultipleLookupEntries', () => {
    it('should generate multiple lookup entries separated by newlines', () => {
      const enums: Enumeration[] = [{
        Name: 'FIRST_ENUM',
        MaxValue: 3,
        EnumValues: [
          { Name: 'Zero', Value: 0 },
          { Name: 'One', Value: 1 }
        ]
      }]
      
      const bitEnums: BitEnumeration[] = [{
        Name: 'FIRST_BIT_ENUM', 
        MaxValue: 7,
        EnumBitValues: [
          { Name: 'Bit 0', Bit: 0 },
          { Name: 'Bit 3', Bit: 3 }
        ]
      }]
      
      const result = generateMultipleLookupEntries(enums, bitEnums, [])
      
      // Should contain both lookup types
      expect(result).to.include('LOOKUP_TYPE(FIRST_ENUM,')
      expect(result).to.include('LOOKUP_TYPE_BITFIELD(FIRST_BIT_ENUM,')
      
      // Should be separated by double newlines
      expect(result).to.include('LOOKUP_END\n\nLOOKUP_TYPE_BITFIELD')
    })

    it('should handle empty arrays', () => {
      const result = generateMultipleLookupEntries([], [], [])
      expect(result).to.equal('')
    })

    it('should handle single enumeration', () => {
      const enums: Enumeration[] = [{
        Name: 'SINGLE_ENUM',
        MaxValue: 1,
        EnumValues: [
          { Name: 'Only Value', Value: 0 }
        ]
      }]
      
      const result = generateMultipleLookupEntries(enums, [], [])
      expect(result).to.include('LOOKUP_TYPE(SINGLE_ENUM,')
      expect(result).to.include('LOOKUP(SINGLE_ENUM, 0, "Only Value")')
      expect(result).to.include('LOOKUP_END')
    })
  })
})
