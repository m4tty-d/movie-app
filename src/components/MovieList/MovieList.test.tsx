import React from 'react'
import { render, screen } from '@testing-library/react'

import MovieList from './MovieList'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import movie from '../../mocks/movie'

const movies = Array.from(Array(3).keys()).map((i) => ({ ...movie, id: `${movie.id}-${i}` }))

describe('MovieList', () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <MovieList movies={movies} />
      </ThemeProvider>,
    )
  })

  it('renders each movie', () => {
    for (const movie of movies) {
      expect(screen.getByTestId(`movie-box-holder-${movie.id}`)).toBeDefined()
    }
  })
})
