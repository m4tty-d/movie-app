import React, { Fragment } from 'react'
import { Container, Box, Typography, CircularProgress } from '@material-ui/core'
import TopBar from '../../components/TopBar/'
import MovieList from '../../components/MovieList'
import MovieDialog from '../../components/MovieDialog'
import { Holder } from './HomeStyles'
import { useSearchMoviesQuery, useRelatedMoviesQuery } from '../../__generated__/graphql'
import { useRecoilState } from 'recoil'
import { searchQueryState, SearchQueryType } from '../../store'

const Home: React.FC = () => {
  const [searchQuery] = useRecoilState(searchQueryState)
  const searchResponse = useSearchMoviesQuery({
    variables: { query: searchQuery.query },
    skip: searchQuery.type !== SearchQueryType.Search || !searchQuery.query.length,
  })
  const relatedResponse = useRelatedMoviesQuery({
    variables: { id: searchQuery.query },
    skip: searchQuery.type !== SearchQueryType.Related || !searchQuery.query.length,
  })

  const loading = searchResponse.loading || relatedResponse.loading
  const movies =
    (searchQuery.type === SearchQueryType.Search
      ? searchResponse.data?.searchMovies
      : relatedResponse.data?.movie.similar) || []

  const getTitle = () => {
    if (!searchQuery.query.length) {
      return `Search to see it in action! :)`
    }

    if (movies.length || loading) {
      return searchQuery.type === SearchQueryType.Search
        ? `Results for "${searchQuery.query}"`
        : `Related to ${searchQuery.meta?.name}`
    } else {
      return 'No result found :('
    }
  }

  return (
    <Fragment>
      <TopBar />
      <Holder>
        <Container>
          <Box mb={4}>
            <Typography variant="h4" component="h1">
              {getTitle()}
            </Typography>
          </Box>
          {loading ? <CircularProgress /> : <MovieList movies={movies} />}
          <MovieDialog />
        </Container>
      </Holder>
    </Fragment>
  )
}

export default Home
