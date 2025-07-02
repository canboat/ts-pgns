import { getPGN } from '../dist/index'

describe('pgn definition tests', () => {
  it(`finds pgn 60928`, function (done) {
    const pgn = getPGN(60928)
    done()
  })
})


