import { isValidURL } from './is-valid-url'

describe('isValidURL', () => {

  it('rejects an argument of undefined', () => {
    expect(isValidURL(undefined)).toBe(false)
  })

  it('rejects a random string', () => {
    expect(isValidURL('dfsf233fasvasdv22')).toBe(false)
  })

  it('rejects an URL without protocol', () => {
    expect(isValidURL('www.google.com')).toBe(false)
  })

  it('accepts a valid URL', () => {
    expect(isValidURL('https://www.google.com')).toBe(true)
  })

})
