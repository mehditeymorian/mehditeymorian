import { SiGithub } from 'react-icons/si'
import { Card } from './Card'
import { Chip } from './Chip'
import type { Project } from '../content/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" rel="noreferrer" className="pcard-link">
      <Card className="pcard">
        <div className="pcard__head">
          <span className="pcard__name">{project.name}</span>
          <SiGithub size={16} aria-hidden="true" />
        </div>
        <p className="pcard__blurb">{project.blurb}</p>
        <div className="pcard__tags">{project.tags.map((t) => (<Chip key={t}>{t}</Chip>))}</div>
      </Card>
    </a>
  )
}
