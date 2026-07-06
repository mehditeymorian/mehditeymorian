import { describe, it, expect } from 'vitest'
import { projects, trajectory, aboutProse, profile, education } from './content'

describe('content privacy guard', () => {
  it('every trajectory entry omits a company field', () => {
    for (const role of trajectory) expect(Object.keys(role)).not.toContain('company')
  })

  it('every project url points at the personal GitHub account', () => {
    for (const p of projects) expect(p.url).toMatch(/^https:\/\/github\.com\/mehditeymorian\//)
  })

  // Deep scan against a local, gitignored blocklist (kept off the public repo so this file
  // does not itself name anything sensitive). import.meta.glob matches the file only when it
  // is present, so this no-ops in CI where the positive guards above still run.
  it('displayed copy contains no blocked terms (local blocklist only)', () => {
    const found = import.meta.glob('./forbidden.local.json', { eager: true }) as Record<
      string,
      { default: { terms: string[] } }
    >
    const mods = Object.values(found)
    if (mods.length === 0) return
    const terms = mods[0].default.terms
    const haystack = JSON.stringify({
      projects: projects.map((p) => ({ ...p, url: '' })),
      trajectory,
      aboutProse,
      profile,
      education,
    }).toLowerCase()
    for (const term of terms) expect(haystack).not.toContain(term.toLowerCase())
  })
})
