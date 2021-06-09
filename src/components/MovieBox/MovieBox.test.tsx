import React from 'react'
import { render, screen } from '@testing-library/react'

import MovieBox from './MovieBox'
import { mapGenres } from '../../utils'
import movies from '../../mocks/movies'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import { RecoilRoot } from 'recoil'

const movie = movies[0]

describe('MovieBox', () => {
  let rerender: (ui: React.ReactElement) => void

  beforeEach(() => {
    const response = render(
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <MovieBox movie={movie} />
        </ThemeProvider>
      </RecoilRoot>,
    )

    rerender = response.rerender
  })

  it('displays image', () => {
    expect(screen.getByRole('img').getAttribute('src')).toBe(movie.poster.medium)
  })

  it('handles empty image', () => {
    rerender(
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <MovieBox movie={{ ...movie, poster: null }} />
        </ThemeProvider>
      </RecoilRoot>,
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
