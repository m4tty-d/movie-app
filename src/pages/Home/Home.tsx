import React, { Fragment } from 'react'
import { Container, Box, Typography } from '@material-ui/core'
import TopBar from '../../components/TopBar'
import MovieList from '../../components/MovieList'
import { Holder } from './HomeStyles'

import movie from '../../mocks/movie'
const movies = Array.from(Array(10).keys()).map((i) => ({ ...movie, id: `${movie.id}-${i}` }))

function App() {
  return (
    <Fragment>
      <TopBar />
      <Holder>
        <Container>
          <Box mb={4}>
            <Typography variant="h4" component="h1">
              Results for
            </Typography>
          </Box>
          <MovieList movies={movies} />
        </Container>
      </Holder>
    </Fragment>
  )
}

export default App
