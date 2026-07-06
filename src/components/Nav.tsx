import { Link, NavLink } from 'react-router-dom'
import { profile } from '../content/content'

const links = [
  { to: '/', label: 'route', end: true },
  { to: '/work', label: 'work' },
  { to: '/cv', label: 'cv' },
]

export function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="nav__brand" aria-label={`${profile.name} — home`}>△ {profile.initials}</Link>
      <nav className="nav__links" aria-label="Primary">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
