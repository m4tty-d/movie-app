import axios from 'axios'
import config from '../config'
import _get from 'lodash.get'
import _includes from 'lodash.includes'
import { format } from 'date-fns'
import { snakeCasify } from '../utils'

export type WikiMovieDetails = {
  extract: string
  url: string
}

export const openSearch = async (query: string): Promise<string[]> => {
  try {
    const { data } = await axios.get(`${config.wikiEndpoint}`, {
      params: {
        action: 'opensearch',
        search: query,
        format: 'json',
        origin: '*',
        limit: 100,
      },
    })

    return data[1]
  } catch (e) {
    console.error(e.response)
  }

  return []
}

export const queryPages = async (query: string): Promise<WikiMovieDetails> => {
  try {
    const response = await axios.get(`${config.wikiEndpoint}`, {
      params: {
        titles: query,
        action: 'query',
        prop: 'info|extracts',
        inprop: 'url',
        exsentences: 6,
        exintro: true,
        exlimit: 1,
        explaintext: 1,
        format: 'json',
        formatversion: 2,
        origin: '*',
      },
    })
    const page = _get(response, 'data.query.pages.0')

    return {
      extract: _get(page, 'extract'),
      url: _get(page, 'fullurl'),
    }
  } catch (e) {
    console.error(e.response)
  }

  return {
    extract: '',
    url: '',
  }
}

export const fetchMovieDetails = async (title: string, releaseDate: string): Promise<WikiMovieDetails> => {
  const releaseYear = format(new Date(releaseDate), 'yyyy')
  const articleTitles = await openSearch(title)

  const titleVariations = [
    `${title} (${releaseYear} film)`,
    `${title} (film)`,
    ...(articleTitles[0] ? [articleTitles[0]] : []),
  ]

  for (const titleVariation of titleVariations) {
    if (
      _includes(
        articleTitles.map((t: string) => t.toLowerCase()),
        titleVariation.toLowerCase(),
      )
    ) {
      const details = await queryPages(snakeCasify(titleVariation))
      if (details.extract.length) {
        return details
      }
    }
  }

  return {
    extract: '',
    url: '',
  }
}
