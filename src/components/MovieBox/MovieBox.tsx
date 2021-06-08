import React from 'react'
import { ShortMovieDetailsFragment } from '../../__generated__/graphql'
import { Star } from '@material-ui/icons'
import { mapGenres } from './helpers'
import { Genres, Holder, ImageContainer, ScoreContainer, StyledImage, Title } from './MovieBoxStyles'

type MovieBoxProps = {
  movie: ShortMovieDetailsFragment
}

const MovieBox: React.FC<MovieBoxProps> = (props) => {
  return (
    <Holder>
      <ImageContainer>
        <ScoreContainer>
          <Star />
          <div>{props.movie.score}</div>
        </ScoreContainer>
        <StyledImage src={props.movie?.poster?.medium} animationDuration={300} aspectRatio={0.67} color="transparent" />
      </ImageContainer>
      <Title>{props.movie.name}</Title>
      <Genres>{mapGenres(props.movie.genres)}</Genres>
    </Holder>
  )
}

export default MovieBox
