import React from 'react'
import { render, screen } from '@testing-library/react'

import MovieList from './MovieList'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import movies from '../../mocks/movies'
import { RecoilRoot } from 'recoil'

describe('MovieList', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <MovieList movies={movies} />
        </ThemeProvider>
      </RecoilRoot>,
    )
  })

  it('renders each movie', () => {
    for (const movie of movies) {
      expect(screen.getByTestId(`movie-box-holder-${movie.id}`)).toBeDefined()
    }
  })
})
