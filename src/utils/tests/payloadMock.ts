/* eslint-disable no-unused-vars */
import { Country } from '../../store/modules/countries/types';

const payload: Country[] = [
  {
    name: 'Brazil',
    population: 206135893,
    region: 'Americas',
    capital: 'Brasília',
    nativeName: 'Brasil',
    subregion: 'South America',
    flag: 'Brazil',
    topLevelDomain: [
      '.br',
    ],
    alpha3Code: 'BRA',
    currencies: [
      {
        code: 'BRL',
        name: 'Brazilian real',
        symbol: 'R$',
      },
    ],
    languages: [
      {
        iso639_1: 'pt',
        iso639_2: 'por',
        name: 'Portuguese',
        nativeName: 'Português',
      },
    ],
    borders: [
      'ARG',
      'BOL',
      'COL',
      'GUF',
      'GUY',
      'PRY',
      'PER',
      'SUR',
      'URY',
      'VEN',
    ],
  },
  {
    name: 'Argentina',
    population: 43590400,
    region: 'Americas',
    capital: 'Buenos Aires',
    nativeName: 'Argentina',
    subregion: 'South America',
    flag: 'Argentina',
    topLevelDomain: [
      '.ar',
    ],
    alpha3Code: 'ARG',
    currencies: [
      {
        code: 'ARS',
        name: 'Argentine peso',
        symbol: '$',
      },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    borders: [
      'BOL',
      'BRA',
      'CHL',
      'PRY',
      'URY',
    ],

  },
];

export default payload;
