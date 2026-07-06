import { Link } from 'react-router-dom'
import { SectionLabel } from '../components/SectionLabel'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../content/content'
import { featured } from '../content/select'

export function SelectedWork() {
  return (
    <section className="section container" id="work" aria-label="Selected work">
      <SectionLabel index="02" title="selected work" note="summits reached" />
      <div className="work__grid">
        {featured(projects).map((p) => (<ProjectCard key={p.slug} project={p} />))}
      </div>
      <Link to="/work" className="section__more">all routes →</Link>
    </section>
  )
}
