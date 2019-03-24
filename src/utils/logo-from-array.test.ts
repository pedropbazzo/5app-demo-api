import { logoFromArray } from './logo-from-array'

describe('logoFromArray', () => {

  it('returns undefined when logos array is undefined', () => {
    expect(logoFromArray(undefined)).toBe(undefined)
  })

  it('returns undefined when logos array is empty', () => {
    expect(logoFromArray([])).toBe(undefined)
  })

  it('returns undefined when logos in array are too small', () => {
    expect(logoFromArray([{
      size: '16x16',
      url: 'htps://example.com/16x16.png',
    }])).toBe(undefined)
  })

  it('returns undefined when logos in array are too big', () => {
    expect(logoFromArray([{
      size: '256x256',
      url: 'htps://example.com/16x16.png',
    }])).toBe(undefined)
  })

  it('returns string when logo in array is within size range', () => {
    expect(logoFromArray([{
      size: '64x64',
      url: 'htps://example.com/16x16.png',
    }])).toBe('htps://example.com/16x16.png')
  })

})
