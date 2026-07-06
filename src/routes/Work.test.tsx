import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Work from './Work'

function renderWork() {
  return render(<MemoryRouter><Work /></MemoryRouter>)
}

describe('Work page', () => {
  it('lists all projects by default', () => {
    renderWork()
    expect(screen.getByText('Etefagh')).toBeInTheDocument()
    expect(screen.getByText('Othello · Double DQN')).toBeInTheDocument()
  })
  it('filters projects when a tag is selected', () => {
    renderWork()
    fireEvent.click(screen.getByRole('button', { name: 'Python' }))
    const grid = screen.getByTestId('work-grid')
    expect(within(grid).getByText('Othello · Double DQN')).toBeInTheDocument()
    expect(within(grid).queryByText('Etefagh')).not.toBeInTheDocument()
  })
  it('restores all projects when "all" is clicked', () => {
    renderWork()
    fireEvent.click(screen.getByRole('button', { name: 'Python' }))
    const grid = screen.getByTestId('work-grid')
    expect(within(grid).queryByText('Etefagh')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'all' }))
    expect(within(grid).getByText('Etefagh')).toBeInTheDocument()
  })
})
