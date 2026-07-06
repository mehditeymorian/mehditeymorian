import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section container" style={{ minHeight: '60vh' }}>
      <p style={{ fontSize: 13, letterSpacing: 2, color: 'var(--accent)' }}>404 — off the map</p>
      <h1 className="section__h2" style={{ marginTop: 12 }}>This route doesn't exist.</h1>
      <Link to="/" className="section__more">back to base camp →</Link>
    </section>
  )
}
