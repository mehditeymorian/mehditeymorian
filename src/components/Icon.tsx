import { FiMail } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub, SiMedium } from 'react-icons/si'
import type { SocialLink } from '../content/types'

const MAP = { github: SiGithub, linkedin: FaLinkedin, medium: SiMedium, mail: FiMail }

export function Icon({ name, size = 16 }: { name: SocialLink['icon']; size?: number }) {
  const C = MAP[name]
  return <C size={size} aria-hidden="true" />
}
