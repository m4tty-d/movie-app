import React from 'react'
import { render, screen } from '@testing-library/react'

import MovieDialog from './MovieDialog'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import { RecoilRoot } from 'recoil'
import { movieDialogState } from '../../store'
import movies from '../../mocks/movies'
import { AdditionalMovieDetailsFragment, ShortMovieDetailsFragment } from '../../__generated__/graphql'
import { WikiMovieDetails } from '../../services/wiki'

const movie = { ...movies[0], extract: '', url: '' } as ShortMovieDetailsFragment &
  AdditionalMovieDetailsFragment &
  WikiMovieDetails

describe('MovieDialog', () => {
  it('shows on visible state', () => {
    render(
      <RecoilRoot initializeState={(snap) => snap.set(movieDialogState, { show: true, movie })}>
        <ThemeProvider theme={theme}>
          <MovieDialog />
        </ThemeProvider>
      </RecoilRoot>,
    )
    expect(screen.getByTestId('dialog')).toBeVisible()
  })

  it(`don't show on hidden state`, () => {
    const { container } = render(
      <RecoilRoot initializeState={(snap) => snap.set(movieDialogState, { show: false, movie: undefined })}>
        <ThemeProvider theme={theme}>
          <MovieDialog />
        </ThemeProvider>
      </RecoilRoot>,
    )

    expect(container).toBeEmptyDOMElement()
  })
})
