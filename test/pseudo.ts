import { expect } from 'chai'
import { getPGNWithNumber, getPGNWithId, PGN_262400 } from '../dist/index'

// canboat publishes its pseudo PGNs (the gateways' own messages, and
// canboat's) apart, in canboat-pseudo.json; they are found like the others.
describe('canboat pseudo PGNs', () => {
  it('are found by number and id', () => {
    expect(getPGNWithNumber(262400)?.map((d) => d.Id)).to.deep.equal([
      'nmea2000GatewayNetworkStatus'
    ])
    expect(getPGNWithNumber(0x400f2)?.map((d) => d.Id)).to.deep.equal([
      'actisenseSystemStatus'
    ])
    expect(getPGNWithNumber(262209)).to.have.length(6)
    expect(getPGNWithId('actisenseStartupStatus')?.PGN).to.equal(262384)
  })

  it('have generated classes', () => {
    const status = new PGN_262400({ canNetworkLoad: 10, deviceCount: 3 })
    expect(status.pgn).to.equal(262400)
    expect(status.fields.deviceCount).to.equal(3)
  })
})
