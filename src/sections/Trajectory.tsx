import { SectionLabel } from '../components/SectionLabel'
import { Timeline } from '../components/Timeline'
import { trajectory } from '../content/content'

export function Trajectory() {
  return (
    <section className="section container" id="trajectory" aria-label="Trajectory">
      <SectionLabel index="04" title="trajectory" note="the trail so far" />
      <Timeline roles={trajectory} />
    </section>
  )
}
