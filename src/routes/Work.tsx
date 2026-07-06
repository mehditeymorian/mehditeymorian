import { useState } from 'react'
import { SectionLabel } from '../components/SectionLabel'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../content/content'
import { allTags, filterByTag } from '../content/select'

export default function Work() {
  const [tag, setTag] = useState<string | null>(null)
  const tags = allTags(projects)
  const shown = filterByTag(projects, tag)
  return (
    <section className="section container" id="work-page">
      <SectionLabel index="✦" title="all routes" note="open source catalogue" />
      <div className="work__filter" role="group" aria-label="Filter by tag">
        <button className={['chip', tag === null && 'is-active'].filter(Boolean).join(' ')} aria-pressed={tag === null} onClick={() => setTag(null)}>all</button>
        {tags.map((t) => (
          <button key={t} className={['chip', tag === t && 'is-active'].filter(Boolean).join(' ')} aria-pressed={tag === t} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>
      <div className="work__grid" data-testid="work-grid">
        {shown.map((p) => (<ProjectCard key={p.slug} project={p} />))}
      </div>
    </section>
  )
}
