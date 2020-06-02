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
    topLevelDomain: [
      '.br',
    ],
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
];

export default payload;
