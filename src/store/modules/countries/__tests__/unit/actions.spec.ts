/* eslint-disable no-unused-vars */
import * as actions from '../../actions';
import { CountriesTypes } from '../../types';

import handleExpectedAction from '../../../../../utils/tests/handleExpectedAction';
import payload from '../../../../../utils/tests/payloadMock';

describe('action creators unit tests', () => {
  describe('listing countries action creators', () => {
    it('should create a action to handle countries request', () => {
      expect.hasAssertions();

      const action = handleExpectedAction({ type: CountriesTypes.LOAD_REQUEST });

      expect(actions.handleLoadRequest()).toStrictEqual(action);
    });

    it('should create a action to handle countries success request', () => {
      expect.hasAssertions();

      const action = handleExpectedAction(
        {
          type: CountriesTypes.LOAD_SUCCESS,
          payload: { countries: payload },
        },
      );

      expect(actions.handleLoadSuccess(payload)).toStrictEqual(action);
    });

    it('should create a action to handle countries failure request', () => {
      expect.hasAssertions();

      const action = handleExpectedAction({ type: CountriesTypes.LOAD_FAILURE });

      expect(actions.handleLoadFailure()).toStrictEqual(action);
    });
  });

  describe('searching countries by name action creators', () => {
    it('should create a action to handle countries request based on the country name', () => {
      expect.hasAssertions();

      const action = handleExpectedAction(
        {
          type: CountriesTypes.LOAD_SEARCH_REQUEST,
          payload: { countryName: 'Brazil' },
        },
      );

      expect(actions.handleLoadSearchRequest('Brazil')).toStrictEqual(action);
    });
    it('should create a action to handle countries success request based on the country name', () => {
      expect.hasAssertions();

      const searchedCountry = payload.filter((country) => country.name === 'Brazil');

      const action = handleExpectedAction(
        {
          type: CountriesTypes.LOAD_SEARCH_SUCCESS,
          payload: { country: searchedCountry },
        },
      );

      expect(actions.handleLoadSearchSuccess(searchedCountry)).toStrictEqual(action);
    });
    it('should create a action to handle countries failure request based on the country name', () => {
      expect.hasAssertions();

      const action = handleExpectedAction(
        {
          type: CountriesTypes.LOAD_SEARCH_FAILURE,
          payload: { message: 'Country not found' },
        },
      );

      expect(actions.handleLoadSearchFailure('Country not found')).toStrictEqual(action);
    });
  });

  describe('filtring countries by continent', () => {
    it('should create a action to handle countries request based on continent', () => {
      expect.hasAssertions();

      const action = handleExpectedAction(
        {
          type: CountriesTypes.LOAD_FILTER_REQUEST,
          payload: { continent: 'America' },
        },
      );

      expect(actions.handleLoadFilterRequest('America')).toStrictEqual(action);
    });
    it('should create a action to handle countries success request based on the continent', () => {
      expect.hasAssertions();

      const searchedCountry = payload.filter((country) => country.region === 'Americas');

      const action = handleExpectedAction(
        {
          type: CountriesTypes.LOAD_FILTER_SUCCESS,
          payload: { country: searchedCountry },
        },
      );

      expect(actions.handleLoadFilterSuccess(searchedCountry)).toStrictEqual(action);
    });
    it('should create a action to handle countries failure request based on the continent', () => {
      expect.hasAssertions();

      const action = handleExpectedAction(
        {
          type: CountriesTypes.LOAD_FILTER_FAILURE,
          payload: { message: 'Something is going wrong, plase try latter' },
        },
      );

      expect(actions.handleLoadFilterFailure('Something is going wrong, plase try latter')).toStrictEqual(action);
    });
  });
});
