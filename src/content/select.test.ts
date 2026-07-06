import { describe, it, expect } from 'vitest'
import { allTags, filterByTag, featured } from './select'
import type { Project } from './types'

const sample: Project[] = [
  { slug: 'a', name: 'A', blurb: '', tags: ['Go', 'QUIC'], url: 'x', featured: true },
  { slug: 'b', name: 'B', blurb: '', tags: ['Go', 'WebRTC'], url: 'x', featured: false },
  { slug: 'c', name: 'C', blurb: '', tags: ['Python'], url: 'x', featured: true },
]

describe('select', () => {
  it('allTags returns unique tags sorted', () => {
    expect(allTags(sample)).toEqual(['Go', 'Python', 'QUIC', 'WebRTC'])
  })
  it('filterByTag returns projects with the tag', () => {
    expect(filterByTag(sample, 'Go').map((p) => p.slug)).toEqual(['a', 'b'])
  })
  it('filterByTag with null returns all', () => {
    expect(filterByTag(sample, null)).toHaveLength(3)
  })
  it('featured returns only featured projects', () => {
    expect(featured(sample).map((p) => p.slug)).toEqual(['a', 'c'])
  })
})
