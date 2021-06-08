import React from 'react'
import { Grid } from '@material-ui/core'
import { ShortMovieDetailsFragment } from '../../__generated__/graphql'
import MovieBox from '../MovieBox/'

type MovieListProps = {
  movies: ShortMovieDetailsFragment[]
}

const MovieList: React.FC<MovieListProps> = (props) => {
  return (
    <Grid container spacing={3}>
      {props.movies?.map((movie) => (
        <Grid item lg={2} md={3} xs={6} key={movie.id} data-testid={`movie-box-holder-${movie.id}`}>
          <MovieBox movie={movie} />
        </Grid>
      ))}
    </Grid>
  )
}

export default MovieList
