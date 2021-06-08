import { atom } from 'recoil'

export const searchQueryState = atom({
  key: 'searchQuery',
  default: '',
})
