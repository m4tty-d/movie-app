import React from 'react'
import { render, screen } from '@testing-library/react'

import MovieBox from './MovieBox'
import { mapGenres } from './helpers'
import movie from '../../mocks/movie'

describe('MovieBox', () => {
  beforeEach(() => {
    render(<MovieBox movie={movie} />)
  })

  it('renders image', () => {
    expect(screen.getByRole('img').getAttribute('src')).toBe(movie.poster.medium)
  })

  it('renders name', () => {
    expect(screen.getByText(movie.name)).toBeDefined()
  })

  it('renders genres', () => {
    expect(screen.getByText(mapGenres(movie.genres))).toBeDefined()
  })
})
