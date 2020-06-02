/* eslint-disable no-unused-vars */
import * as actions from '../../actions';
import { CountriesTypes, Country } from '../../types';

interface ExpectedActionParams {
  type: string
  payload?: any
}

describe('unit action creators tests', () => {
  function handleExpectedAction({ type, payload }: ExpectedActionParams) {
    const actionFormat = {
      error: undefined,
      meta: undefined,
      type,
      payload: payload || undefined,
    };

    return actionFormat;
  }

  it('should create a action to handle countries request', () => {
    expect.hasAssertions();

    const action = handleExpectedAction({ type: CountriesTypes.LOAD_REQUEST });

    expect(actions.handleLoadRequest()).toStrictEqual(action);
  });

  it('should create a action to handle countries success request', () => {
    expect.hasAssertions();

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

    const action = handleExpectedAction(
      {
        type: CountriesTypes.LOAD_SUCCESS,
        payload: { countries: payload },
      },
    );

    expect(actions.handleLoadSuccess(payload)).toStrictEqual(action);
  });

  it('should create a action to handle countries success failure', () => {
    expect.hasAssertions();

    const action = handleExpectedAction({ type: CountriesTypes.LOAD_FAILURE });

    expect(actions.handleLoadFailure()).toStrictEqual(action);
  });
});
