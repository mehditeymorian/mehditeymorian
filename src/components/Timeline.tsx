import type { Role } from '../content/types'

export function Timeline({ roles }: { roles: Role[] }) {
  return (
    <div className="timeline">
      {roles.map((r, i) => (
        <div key={r.title + r.period + i} className={['timeline__row', r.current && 'is-current'].filter(Boolean).join(' ')}>
          <span className="timeline__dot" />
          <span className="timeline__period">{r.period}</span>
          <div>
            <div className="timeline__title">{r.title}</div>
            <p className="timeline__note">{r.note}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
