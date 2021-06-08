import { GenreNameFragment } from '../../__generated__/graphql'

export const mapGenres = (genres: GenreNameFragment[]) => genres.map((genre) => genre.name).join(', ')
