import { SectionLabel } from '../components/SectionLabel'
import { Timeline } from '../components/Timeline'
import { Chip } from '../components/Chip'
import { profile, trajectory, stack, education, cvPdf } from '../content/content'

export default function CV() {
  return (
    <section className="section container" id="cv-page">
      <SectionLabel index="✦" title="cv" note="roles, not names" />
      <div className="cv__head">
        <div>
          <h1 className="cv__name">{profile.name}</h1>
          <p className="cv__title">{profile.title}</p>
          {profile.openToWork && <span className="cv__open">● open to opportunities</span>}
        </div>
        {cvPdf && (
          <a className="cv__download" href={cvPdf} download>download pdf ↓</a>
        )}
      </div>

      <h2 className="cv__h2">experience</h2>
      <Timeline roles={trajectory} />

      <h2 className="cv__h2">education</h2>
      <div className="cv__edu">
        {education.map((e) => (
          <div key={e.school} className="cv__edu-row">
            <div>
              <div className="cv__edu-school">{e.school}</div>
              <div className="cv__edu-degree">{e.degree}</div>
            </div>
            <span className="cv__edu-period">{e.period}</span>
          </div>
        ))}
      </div>

      <h2 className="cv__h2">stack</h2>
      <div className="cv__stack">
        {stack.map((g) => (
          <div key={g.label} className="cv__stack-group">
            <span className="cv__stack-label">{g.label}</span>
            <div className="cv__stack-items">{g.items.map((i) => (<Chip key={i}>{i}</Chip>))}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
