import type { Project } from './types'

export function allTags(projects: Project[]): string[] {
  return [...new Set(projects.flatMap((p) => p.tags))].sort()
}

export function filterByTag(projects: Project[], tag: string | null): Project[] {
  if (!tag) return projects
  return projects.filter((p) => p.tags.includes(tag))
}

export function featured(projects: Project[]): Project[] {
  return projects.filter((p) => p.featured)
}
