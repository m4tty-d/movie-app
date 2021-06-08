import React, { Fragment } from 'react'
import { Container, Box, Typography, CircularProgress } from '@material-ui/core'
import TopBar from '../../components/TopBar/'
import MovieList from '../../components/MovieList'
import { Holder } from './HomeStyles'
import { useSearchMoviesQuery } from '../../__generated__/graphql'
import { useRecoilState } from 'recoil'
import { searchQueryState } from '../../store'

const Home: React.FC = () => {
  const [searchQuery] = useRecoilState(searchQueryState)
  const { data, loading } = useSearchMoviesQuery({
    variables: { query: searchQuery },
    skip: !searchQuery || !searchQuery.length,
  })
  const movies = data?.searchMovies || []

  return (
    <Fragment>
      <TopBar />
      <Holder>
        <Container>
          <Box mb={4}>
            <Typography variant="h4" component="h1">
              {movies.length || loading ? `Results for "${searchQuery}"` : `Search to get started! :)`}
            </Typography>
          </Box>
          {loading ? <CircularProgress /> : <MovieList movies={movies} />}
        </Container>
      </Holder>
    </Fragment>
  )
}

export default Home
