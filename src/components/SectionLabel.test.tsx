import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionLabel } from './SectionLabel'

describe('SectionLabel', () => {
  it('renders index, title, and coordinate note', () => {
    render(<SectionLabel index="01" title="whoami" note="elev. 1,240 m" />)
    expect(screen.getByText(/01/)).toBeInTheDocument()
    expect(screen.getByText(/whoami/)).toBeInTheDocument()
    expect(screen.getByText(/elev\. 1,240 m/)).toBeInTheDocument()
  })
})
