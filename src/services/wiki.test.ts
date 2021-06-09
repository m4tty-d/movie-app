import { openSearch, fetchMovieDetails } from './wiki'
import movies from '../mocks/movies'

describe('wikipedia service', () => {
  it('opensearch returns array', async () => {
    const articles = await openSearch(movies[0].name)
    expect(Array.isArray(articles)).toBeTruthy()
  })

  it('fetchMovieDetails returns movie details', async () => {
    for (const movie of movies) {
      const details = await fetchMovieDetails(movie.name, movie.releaseDate)
      expect(details.extract).toContain('film')
      expect(details.url).toContain('film')
    }
  })
})
