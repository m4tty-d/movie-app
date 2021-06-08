import React from 'react'
import { render, screen } from '@testing-library/react'

import MovieBox from './MovieBox'
import { mapGenres } from './helpers'
import movie from '../../mocks/movie'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'

describe('MovieBox', () => {
  let rerender: (ui: React.ReactElement) => void

  beforeEach(() => {
    const response = render(
      <ThemeProvider theme={theme}>
        <MovieBox movie={movie} />
      </ThemeProvider>,
    )

    rerender = response.rerender
  })

  it('displays image', () => {
    expect(screen.getByRole('img').getAttribute('src')).toBe(movie.poster.medium)
  })

  it('handles empty image', () => {
    rerender(
      <ThemeProvider theme={theme}>
        <MovieBox movie={{ ...movie, poster: null }} />
      </ThemeProvider>,
    )
    expect(screen.getByRole('img').getAttribute('src')).toBe('placeholder.svg')
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
