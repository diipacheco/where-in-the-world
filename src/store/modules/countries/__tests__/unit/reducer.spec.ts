/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import { Reducer } from 'redux-testkit';

import handleExpectedAction from '../../../../../utils/tests/handleExpectedAction';
import payload from '../../../../../utils/tests/payloadMock';

import countries from '../../reducer';
import { CountriesState, CountriesTypes } from '../../types';

describe('reducer unit tests', () => {
  it('should have a initial state', () => {
    expect.hasAssertions();

    const INITIAL_STATE: CountriesState = {
      data: [],
      loading: false,
      error: false,
    };

    const action = handleExpectedAction({ type: '' });

    expect(countries(INITIAL_STATE, action))
      .toStrictEqual({ data: [], loading: false, error: false });
  });

  it('should handle LOAD_REQUEST action on initial state', () => {
    expect.hasAssertions();

    const action = handleExpectedAction({ type: CountriesTypes.LOAD_REQUEST });

    const expectedState = { data: [], loading: false, error: false };

    const result = { data: [], loading: true, error: false };

    Reducer(countries)
      .withState(expectedState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle LOAD_SUCCESS action on initial state', () => {
    expect.hasAssertions();

    const action = handleExpectedAction(
      {
        type: CountriesTypes.LOAD_SUCCESS,
        payload: { countries: payload },
      },
    );

    const expectedState = { data: [], loading: true, error: false };

    const result = { data: payload, loading: false, error: false };

    Reducer(countries)
      .withState(expectedState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle LOAD_FAILURE action on initial state', () => {
    expect.hasAssertions();

    const action = handleExpectedAction({ type: CountriesTypes.LOAD_FAILURE });

    const expectedState = { data: [], loading: true, error: false };

    const result = { data: [], loading: false, error: true };

    Reducer(countries)
      .withState(expectedState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle LOAD_SEARCH_REQUEST action on initial state', () => {
    expect.hasAssertions();

    const action = handleExpectedAction(
      {
        type: CountriesTypes.LOAD_SEARCH_REQUEST,
        payload: { country: 'Brazil' },
      },
    );

    const expectedState = {
      data: payload,
      loading:
      false,
      error: false,
    };

    const result = {
      data: payload,
      loading: true,
      error:
      false,
    };

    Reducer(countries)
      .withState(expectedState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle LOAD_SEARCH_SUCCESS action on initial state', () => {
    expect.hasAssertions();

    const filtredCountry = payload.filter((country) => country.name === 'Brazil' || country.nativeName === 'Brasil');

    const action = handleExpectedAction(
      {
        type: CountriesTypes.LOAD_SEARCH_SUCCESS,
        payload: { country: filtredCountry },
      },
    );

    const expectedState = {
      data: payload,
      loading: true,
      error: false,
    };

    const result = {
      data: filtredCountry,
      loading: false,
      error: false,
    };

    Reducer(countries)
      .withState(expectedState)
      .expect(action)
      .toReturnState(result);
  });

  it('should handle LOAD_SEARCH_FAILURE action on inital state', () => {
    expect.hasAssertions();

    const action = handleExpectedAction(
      {
        type: CountriesTypes.LOAD_SEARCH_FAILURE,
        payload: { message: 'Not Found' },
      },
    );

    const expectedState = {
      data: payload,
      loading: true,
      error: false,
    };

    const result = {
      data: payload,
      loading: false,
      error: true,
      errorMessage: 'Not Found',
    };

    Reducer(countries)
      .withState(expectedState)
      .expect(action)
      .toReturnState(result);
  });
});
