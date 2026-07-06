import type { Profile, Project, Role, StackGroup, SocialLink, Education, SiteContent } from './types'
import data from './content.json'

// Everything the site displays comes from content.json — edit that file to change the site.
// It is the single source of truth and, by design, contains no employer names, no work
// metrics, and no internal/NDA projects (see content.test.ts for the automated guard).
const site = data as unknown as SiteContent

export const profile: Profile = site.profile
export const aboutProse: string[] = site.about.prose
export const aboutPersonal: string = site.about.personal
export const projects: Project[] = site.projects
export const stack: StackGroup[] = site.stack
export const trajectory: Role[] = site.trajectory
export const education: Education[] = site.education
export const socials: SocialLink[] = site.socials

// Set "cvPdf" in content.json to a public path (e.g. "/cv.pdf") ONLY when an approved file
// is placed in public/. Left null, no download link is shown.
export const cvPdf: string | null = site.cvPdf
