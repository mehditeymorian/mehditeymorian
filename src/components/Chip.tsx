import type { ReactNode } from 'react'

export function Chip({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return <span className={['chip', active && 'is-active'].filter(Boolean).join(' ')}>{children}</span>
}
