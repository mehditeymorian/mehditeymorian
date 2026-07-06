import { socials, profile } from '../content/content'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="footer container">
      <span className="footer__meta">elev. ∞ · bearing N</span>
      <div className="footer__socials">
        {socials.map((s) => {
          const external = s.href.startsWith('http')
          return (
            <a key={s.label} href={s.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} aria-label={s.label}>
              <Icon name={s.icon} />
            </a>
          )
        })}
      </div>
      <span className="footer__meta">© {profile.name}</span>
    </footer>
  )
}
