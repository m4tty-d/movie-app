import React, { useState } from 'react'
import { ShortMovieDetailsFragment, GetMovieDocument } from '../../__generated__/graphql'
import { Star } from '@material-ui/icons'
import { mapGenres } from '../../utils'
import {
  Genres,
  Holder,
  ImageContainer,
  ScoreContainer,
  StyledImage,
  Title,
  StyledImageIcon,
  LoaderHolder,
} from './MovieBoxStyles'
import placeholderImage from '../../assets/placeholder.svg'
import { useRecoilState } from 'recoil'
import { movieDialogState } from '../../store'
import apolloClient from '../../graphql/apolloClient'
import { fetchMovieDetails } from '../../services/wiki'
import { CircularProgress } from '@material-ui/core'

type MovieBoxProps = {
  movie: ShortMovieDetailsFragment
}

const MovieBox: React.FC<MovieBoxProps> = (props) => {
  const [dialogLoading, setDialogLoading] = useState(false)
  const [, setMovieDialog] = useRecoilState(movieDialogState)

  const showMovieDialog = async () => {
    setDialogLoading(true)
    const movieDetailResponse = await apolloClient.query({
      query: GetMovieDocument,
      variables: {
        id: props.movie.id,
      },
    })
    const wiki = await fetchMovieDetails(props.movie.name, movieDetailResponse.data.movie.releaseDate)
    setDialogLoading(false)

    setMovieDialog({
      show: true,
      movie: {
        ...props.movie,
        ...movieDetailResponse.data?.movie,
        ...wiki,
      },
    })
  }

  return (
    <Holder onClick={() => showMovieDialog()}>
      <ImageContainer>
        <ScoreContainer>
          <Star />
          <div>{props.movie.score}</div>
        </ScoreContainer>
        <StyledImage
          src={props.movie?.poster?.medium || placeholderImage}
          animationDuration={300}
          aspectRatio={0.67}
          color="transparent"
          errorIcon={<StyledImageIcon />}
        />
        {!props.movie?.poster ? <StyledImageIcon /> : ''}
        {dialogLoading ? (
          <LoaderHolder>
            <CircularProgress />
          </LoaderHolder>
        ) : (
          ''
        )}
      </ImageContainer>
      <Title>{props.movie.name}</Title>
      <Genres>{mapGenres(props.movie.genres)}</Genres>
    </Holder>
  )
}

export default MovieBox
