import { SectionLabel } from '../components/SectionLabel'
import { Chip } from '../components/Chip'
import { stack } from '../content/content'

export function Stack() {
  return (
    <section className="section container" id="stack" aria-label="Stack">
      <SectionLabel index="03" title="stack" note="kit" />
      <div className="stack__grid">
        {stack.map((g) => (
          <div key={g.label}>
            <div className="stack__label">{g.label}</div>
            <div className="stack__items">{g.items.map((i) => (<Chip key={i}>{i}</Chip>))}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
