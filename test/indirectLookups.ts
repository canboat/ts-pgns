import { expect } from 'chai'
import {
  getIndirectEnumeration,
  getIndirectEnumerationName,
  getIndirectEnumerationValue,
  getIndirectEnumerations
} from '../dist/index'

describe('indirect lookups', () => {
  it('lists canboat’s indirect enumerations', () => {
    const names = getIndirectEnumerations().map((e) => e.Name)
    expect(names).to.include.members([
      'DEVICE_FUNCTION',
      'FUSION_SETTING_VALUE'
    ])
    expect(getIndirectEnumeration('DEVICE_FUNCTION')!.EnumValues).to.not.be
      .empty
    expect(getIndirectEnumeration('NO_SUCH_ENUM')).to.equal(undefined)
  })

  it('names a device function by its device class', () => {
    // 60928 ISO Address Claim: class 120 (Display), function 130
    expect(getIndirectEnumerationName('DEVICE_FUNCTION', 120, 130)).to.equal(
      'Display'
    )
    // the same function code means something else in another class
    expect(getIndirectEnumerationName('DEVICE_FUNCTION', 10, 130)).to.equal(
      'Diagnostic'
    )
    expect(getIndirectEnumerationName('DEVICE_FUNCTION', 120, 255)).to.equal(
      undefined
    )
  })

  it('gives the code of a name under its key', () => {
    const name = getIndirectEnumerationName('DEVICE_FUNCTION', 120, 130)!
    expect(getIndirectEnumerationValue('DEVICE_FUNCTION', 120, name)).to.equal(
      130
    )
    expect(
      getIndirectEnumerationValue('DEVICE_FUNCTION', 120, 'No such')
    ).to.equal(undefined)
  })
})
