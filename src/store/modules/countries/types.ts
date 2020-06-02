/* eslint-disable no-unused-vars */
export enum CountriesTypes {
  LOAD_REQUEST = '@witw/LOAD_REQUEST',
  LOAD_SUCCESS = '@witw/LOAD_SUCCESS',
  LOAD_FAILURE = '@witw/LOAD_FAILURE'
}

interface Currencie {
  code: string,
  name: string
  symbol: string
}
interface Language {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
}

export interface Country {
  /**
   * Main informations
   */
  name: string,
  population: number,
  region: string,
  capital: string

  /**
   * Detailed informations
   */
  nativeName: string,
  subregion: string,
  topLevelDomain: string[],
  currencies: Currencie[],
  languages: Language[],
  borders: string[]
}

export interface CountriesState {
  data: Country[],
  loading: boolean,
  error: boolean
}
