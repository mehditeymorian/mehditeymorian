import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { SelectedWork } from '../sections/SelectedWork'
import { Stack } from '../sections/Stack'
import { Trajectory } from '../sections/Trajectory'
import { Contact } from '../sections/Contact'
import { Reveal } from '../components/Reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><SelectedWork /></Reveal>
      <Reveal><Stack /></Reveal>
      <Reveal><Trajectory /></Reveal>
      <Reveal><Contact /></Reveal>
    </>
  )
}
