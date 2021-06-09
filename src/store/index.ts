import { atom } from 'recoil'
import { AdditionalMovieDetailsFragment, ShortMovieDetailsFragment } from '../__generated__/graphql'
import { WikiMovieDetails } from '../services/wiki'

export enum SearchQueryType {
  Search,
  Related,
}

export type SearchQueryState = {
  type: SearchQueryType
  query: string
  // eslint-disable-next-line
  meta?: any
}

export type MovieDialogState = {
  show: boolean
  movie: (ShortMovieDetailsFragment & AdditionalMovieDetailsFragment & WikiMovieDetails) | undefined
}

export const searchQueryState = atom({
  key: 'searchQuery',
  default: { type: SearchQueryType.Search, query: '', meta: {} } as SearchQueryState,
})

export const movieDialogState = atom({
  key: 'movieDialog',
  default: { show: false, movie: undefined } as MovieDialogState,
})
