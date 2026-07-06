import { SectionLabel } from '../components/SectionLabel'
import { Card } from '../components/Card'
import { profile, aboutProse, aboutPersonal } from '../content/content'

export function About() {
  return (
    <section className="section container" id="about" aria-labelledby="about-heading">
      <SectionLabel index="01" title="whoami" note="elev. 1,240 m" />
      <div className="about__grid">
        <div>
          <h2 className="section__h2" id="about-heading">Reading the terrain of complexity.</h2>
          {aboutProse.map((p, i) => (<p className="section__p" key={i}>{p}</p>))}
          <p className="section__p section__p--muted">{aboutPersonal}</p>
        </div>
        <Card className="about__card">
          <div className="about__card-title">./waypoint</div>
          {[
            ['role', profile.title.split(' · ')[0]],
            ['focus', profile.focus],
            ['tools', profile.tools],
            ['based', profile.based],
            ['status', `● ${profile.status}`],
          ].map(([k, v]) => (
            <div className="about__row" key={k}><span>{k}</span><span className={k === 'status' ? 'is-status' : ''}>{v}</span></div>
          ))}
        </Card>
      </div>
    </section>
  )
}
