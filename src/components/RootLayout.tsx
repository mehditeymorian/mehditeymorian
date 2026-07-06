import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function RootLayout() {
  return (
    <>
      <a href="#main" className="skip-link">skip to content</a>
      <Nav />
      <main id="main"><Outlet /></main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
