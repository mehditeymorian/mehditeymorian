import { describe, it, expect, vi, afterEach } from 'vitest'
import { prefersReducedMotion } from './motion'

describe('prefersReducedMotion', () => {
  afterEach(() => vi.unstubAllGlobals())
  it('returns true when the media query matches', () => {
    vi.stubGlobal('matchMedia', (q: string) => ({ matches: true, media: q }))
    expect(prefersReducedMotion()).toBe(true)
  })
  it('returns false when it does not match', () => {
    vi.stubGlobal('matchMedia', (q: string) => ({ matches: false, media: q }))
    expect(prefersReducedMotion()).toBe(false)
  })
})
