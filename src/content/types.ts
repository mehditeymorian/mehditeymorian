export interface Project {
  slug: string
  name: string
  blurb: string
  tags: string[]
  url: string
  featured: boolean
}

export interface Role {
  title: string
  period: string
  note: string
  current?: boolean
}

export interface StackGroup {
  label: string
  items: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'medium' | 'mail'
}

export interface Profile {
  name: string
  initials: string
  title: string
  focus: string
  tools: string
  based: string
  status: string
  tagline: string
  openToWork?: boolean
}

export interface Education {
  school: string
  degree: string
  period: string
}

// Shape of content.json — the single, editable source of everything the site shows.
export interface SiteContent {
  profile: Profile
  about: { prose: string[]; personal: string }
  projects: Project[]
  stack: StackGroup[]
  trajectory: Role[]
  education: Education[]
  socials: SocialLink[]
  cvPdf: string | null
}
