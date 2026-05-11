import { expect } from 'chai'
import {
  BitEnumeration,
  getBitEnumeration,
  getBitEnumerations,
  getEnumeration,
  getEnumerations,
  removeBitLookup,
  updateBitLookup
} from '../dist/index'

describe('updateBitLookup', () => {
  it('updates an existing bit enumeration in place', () => {
    const before = getBitEnumeration('ENGINE_STATUS_1')
    expect(before).to.exist
    const originalMaxValue = before!.MaxValue
    const originalValues = before!.EnumBitValues

    try {
      updateBitLookup({
        Name: 'ENGINE_STATUS_1',
        MaxValue: 0xffff,
        EnumBitValues: originalValues
      } as BitEnumeration)

      const after = getBitEnumeration('ENGINE_STATUS_1')
      expect(after).to.exist
      expect(after!.MaxValue).to.equal(0xffff)
      expect(after!.EnumBitValues).to.have.length(originalValues.length)
    } finally {
      updateBitLookup({
        Name: 'ENGINE_STATUS_1',
        MaxValue: originalMaxValue,
        EnumBitValues: originalValues
      } as BitEnumeration)
    }
  })

  it('adds a new bit enumeration into the bit-enum list (not the regular enum list)', () => {
    const name = 'TEST_UPDATE_BIT_LOOKUP_NEW_ENUM'
    const added: BitEnumeration = {
      Name: name,
      MaxValue: 1,
      EnumBitValues: [{ Bit: 0, Name: 'FlagZero' }]
    } as BitEnumeration

    try {
      updateBitLookup(added)

      const fromBit = getBitEnumeration(name)
      expect(fromBit, 'getBitEnumeration should find the newly added entry').to
        .exist
      expect(fromBit!.EnumBitValues).to.have.length(1)
      expect(fromBit!.EnumBitValues[0].Name).to.equal('FlagZero')

      expect(
        getBitEnumerations().some((e) => e.Name === name),
        'getBitEnumerations should include the newly added entry'
      ).to.be.true

      expect(
        getEnumeration(name),
        'a bit enum must not leak into the regular enum lookup'
      ).to.be.undefined
      expect(
        getEnumerations().some((e) => e.Name === name),
        'a bit enum must not appear in the regular enum list'
      ).to.be.false
    } finally {
      removeBitLookup(added)
    }
  })
})
