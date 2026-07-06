import { TerrainCanvas } from '../three/TerrainCanvas'
import { profile } from '../content/content'

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <h1 className="sr-only">{profile.name} — {profile.title}</h1>
      <TerrainCanvas className="hero__terrain" />
      <div className="hero__inner container">
        <p className="hero__kicker">{profile.title}</p>
        <p className="hero__name" aria-hidden="true">{profile.name}</p>
        <p className="hero__tagline">{profile.tagline}</p>
      </div>
      <span className="hero__scroll">explore ↓</span>
    </section>
  )
}
