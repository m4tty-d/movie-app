import { GenreNameFragment } from './__generated__/graphql'

export const snakeCasify = (str: string): string => str.split(' ').join('_')

export const mapGenres = (genres: GenreNameFragment[]) => genres.map((genre) => genre.name).join(', ')
