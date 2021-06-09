import React from 'react'
import { format, parseISO, intervalToDuration, formatDuration } from 'date-fns'
import Image from 'material-ui-image'
import {
  Transition,
  StyledDialog,
  StyledDialogContent,
  Title,
  Infos,
  Extract,
  ImageContainer,
  ModalCloseIcon,
  ImdbLogo,
} from './MovieDialogStyles'
import Button from '../global/Button'
import imdbLogo from '../../assets/imdb_logo.svg'
import placeholderImage from '../../assets/placeholder.svg'

import { mapGenres } from '../../utils'
import { useRecoilState } from 'recoil'
import { MovieDialogState, movieDialogState, searchQueryState, SearchQueryType } from '../../store'
import { Box, Chip } from '@material-ui/core'

const MovieModal: React.FC = () => {
  const [movieDialog, setMovieDialog] = useRecoilState<MovieDialogState>(movieDialogState)
  const [, setSearchQuery] = useRecoilState(searchQueryState)
  const { movie } = movieDialog

  const closeDialog = () => {
    setMovieDialog({ ...movieDialog, show: false })
  }

  const showRelatedMovies = () => {
    setSearchQuery({ type: SearchQueryType.Related, query: movie?.id || '', meta: { name: movie?.name } })
    closeDialog()
  }

  return (
    <StyledDialog
      open={movieDialog.show}
      TransitionComponent={Transition}
      onClose={() => closeDialog()}
      scroll="body"
      data-testid="dialog"
    >
      <ImageContainer>
        <ModalCloseIcon onClick={() => closeDialog()} />
        <Image
          src={movie?.backdrop?.medium || placeholderImage}
          animationDuration={300}
          aspectRatio={1.78}
          color="transparent"
        />
      </ImageContainer>
      <StyledDialogContent>
        <Title>{movie?.name}</Title>
        <Infos>
          {movie?.releaseDate ? <div>{format(parseISO(movie?.releaseDate), 'yyyy')}</div> : ''}
          <div>{mapGenres(movie?.genres || [])}</div>
          {movie?.runtime ? (
            <div>{formatDuration(intervalToDuration({ start: 0, end: (movie?.runtime || 0) * 60 * 1000 }))}</div>
          ) : (
            ''
          )}
          {movie?.socialMedia?.imdb ? (
            <div>
              <a href={movie?.socialMedia?.imdb} target="_blank" rel="noreferrer">
                <ImdbLogo src={imdbLogo} />
              </a>
            </div>
          ) : (
            ''
          )}
          {movie?.url ? (
            <div>
              <Chip
                variant="outlined"
                label="Wikipedia"
                color="secondary"
                size="small"
                component="a"
                clickable
                href={movie?.url}
                target="_blank"
              />
            </div>
          ) : (
            ''
          )}
        </Infos>
        <Extract>{movie?.extract}</Extract>
        <Box mt={2}>
          <Button onClick={() => showRelatedMovies()}>Related movies</Button>
        </Box>
      </StyledDialogContent>
    </StyledDialog>
  )
}

export default MovieModal
