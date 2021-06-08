import React from 'react'
import { render, screen } from '@testing-library/react'

import MovieBox from './MovieBox'
import { mapGenres } from './helpers'
import movie from '../../mocks/movie'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'

describe('MovieBox', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <MovieBox movie={movie} />
      </ThemeProvider>,
    )
  })

  it('displays image', () => {
    expect(screen.getByRole('img').getAttribute('src')).toBe(movie.poster.medium)
  })

  it('displays score', () => {
    expect(screen.getByText(movie.score)).toBeDefined()
  })

  it('displays name', () => {
    expect(screen.getByText(movie.name)).toBeDefined()
  })

  it('displays genres', () => {
    expect(screen.getByText(mapGenres(movie.genres))).toBeDefined()
  })
})
