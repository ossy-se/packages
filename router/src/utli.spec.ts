import { describe, expect, it } from '@jest/globals'
import { isCatchAllRoutePath, padWithSlash } from './utli'

describe('isCatchAllRoutePath', () => {
  it('matches common wildcard path shapes', () => {
    expect(isCatchAllRoutePath('*')).toBe(true)
    expect(isCatchAllRoutePath('/*')).toBe(true)
    expect(isCatchAllRoutePath('/*/')).toBe(true)
  })

  it('rejects normal paths', () => {
    expect(isCatchAllRoutePath('/about')).toBe(false)
    expect(isCatchAllRoutePath('')).toBe(false)
    expect(isCatchAllRoutePath(undefined)).toBe(false)
  })

  it('padWithSlash of * is not equal to * (documents router-react fallback behaviour)', () => {
    expect(padWithSlash('*')).toBe('/*/')
  })
})
