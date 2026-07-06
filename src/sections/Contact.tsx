import { SectionLabel } from '../components/SectionLabel'
import { Icon } from '../components/Icon'
import { socials, profile } from '../content/content'

export function Contact() {
  return (
    <section className="section container" id="contact" aria-label="Contact" style={{ borderBottom: 'none' }}>
      <SectionLabel index="05" title="contact" note="trailhead" />
      <h2 className="section__h2">Let's find the next route.</h2>
      {profile.openToWork && <p className="contact__status">● open to opportunities</p>}
      <div className="contact__links">
        {socials.map((s) => {
          const external = s.href.startsWith('http')
          return (
            <a key={s.label} href={s.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} className="contact__link">
              <Icon name={s.icon} /> {s.label}
            </a>
          )
        })}
      </div>
    </section>
  )
}
