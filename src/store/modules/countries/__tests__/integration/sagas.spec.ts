/* eslint-disable no-unused-vars */
import { runSaga } from 'redux-saga';
import { AnyAction } from 'redux';

import api from '../../../../../services/api';
import payload from '../../../../../utils/tests/payloadMock';
import * as actions from '../../actions';
import * as sagas from '../../sagas';
import { CountriesTypes } from '../../types';

describe('sagas integration tests', () => {
  describe('listing sagas', () => {
    it('should call api and dispatch LOAD_SUCCESS action', async () => {
      expect.hasAssertions();

      const response = {
        data: payload,
      };

      const requestCountries = jest.spyOn(api, 'get')
        .mockResolvedValue(response);

      const dispatched: Array<AnyAction> = [];

      await runSaga({
        dispatch: (action: AnyAction) => dispatched.push(action),
      }, sagas.handleLoadRequestAction);

      expect(requestCountries).toHaveBeenCalledTimes(1);
      expect(dispatched).toStrictEqual([actions.handleLoadSuccess(response.data)]);

      requestCountries.mockClear();
    });

    it('should call api and dispatch LOAD_FAILURE action', async () => {
      expect.hasAssertions();

      const requestCountries = jest.spyOn(api, 'get').mockRejectedValue(new Error());

      const dispatched: Array<AnyAction> = [];

      await runSaga({
        dispatch: (action: AnyAction) => dispatched.push(action),
      }, sagas.handleLoadRequestAction);

      expect(requestCountries).toHaveBeenCalledTimes(1);
      expect(dispatched).toStrictEqual([actions.handleLoadFailure()]);

      requestCountries.mockClear();
    });
  });
  describe('searching sagas', () => {
    it('should call api and dispatch LOAD_SEARCH_SUCCESS action', async () => {
      expect.hasAssertions();

      const filtredCountry = payload.filter((country) => country.name === 'Brazil' || country.nativeName === 'Brasil');

      const response = {
        data: filtredCountry,
      };

      const requestCountry = jest.spyOn(api, 'get')
        .mockResolvedValue(response);

      const dispatched: Array<AnyAction> = [];

      await runSaga({
        dispatch: (action: AnyAction) => dispatched.push(action),
      }, sagas.handleLoadSearchRequestAction, {
        type: CountriesTypes.LOAD_SEARCH_REQUEST,
        payload: {
          countryName: 'Brazil',
        },
      });

      expect(requestCountry).toHaveBeenCalledTimes(1);
      expect(dispatched).toStrictEqual([actions.handleLoadSearchSuccess(response.data)]);

      requestCountry.mockClear();
    });

    it('should call api and dispatch LOAD_SEARCH_FAILURE action', async () => {
      expect.hasAssertions();

      const response = {
        data: {
          status: '404',
          message: 'flag not found, please typed another one',
        },
      };

      const requestCountry = jest.spyOn(api, 'get')
        .mockRejectedValue(response.data);

      const dispatched: Array<AnyAction> = [];

      await runSaga({
        dispatch: (action: AnyAction) => dispatched.push(action),
      }, sagas.handleLoadSearchRequestAction, {
        type: CountriesTypes.LOAD_SEARCH_REQUEST,
        payload: {
          countryName: 'asdasd',
        },
      });

      expect(requestCountry).toHaveBeenCalledTimes(1);
      expect(dispatched).toStrictEqual([actions.handleLoadSearchFailure(response.data.message)]);

      requestCountry.mockClear();
    });
  });
  describe('filtring sagas', () => {
    it('should call api and dispatch LOAD_FILTER_SUCCESS', async () => {
      expect.hasAssertions();

      const filtredCountry = payload.filter((country) => country.name === 'Brazil' || country.nativeName === 'Brasil');

      const response = {
        data: filtredCountry,
      };

      const filterCountries = jest.spyOn(api, 'get')
        .mockResolvedValue(response);

      const dispatched: Array<AnyAction> = [];

      await runSaga({
        dispatch: (action: AnyAction) => dispatched.push(action),
      }, sagas.handleLoadFilterRequestAction, {
        type: CountriesTypes.LOAD_FILTER_REQUEST,
        payload: { continent: 'Americas' },
      });

      expect(filterCountries).toHaveBeenCalledTimes(1);
      expect(dispatched).toStrictEqual([actions.handleLoadFilterSuccess(response.data)]);

      filterCountries.mockClear();
    });
    it('should call api and dispatch LOAD_FILTER_FAILURE', async () => {
      expect.hasAssertions();

      const response = {
        data: {
          status: '404',
          message: 'Something is going wrong, please try latter',
        },
      };

      const filterCountries = jest.spyOn(api, 'get')
        .mockRejectedValue(response.data);

      const dispatched: Array<AnyAction> = [];

      await runSaga({
        dispatch: (action: AnyAction) => dispatched.push(action),
      }, sagas.handleLoadFilterRequestAction, {
        type: CountriesTypes.LOAD_FILTER_REQUEST,
        payload: {
          continent: 'asdasd',
        },
      });

      expect(filterCountries).toHaveBeenCalledTimes(1);
      expect(dispatched).toStrictEqual([actions.handleLoadFilterFailure(response.data.message)]);

      filterCountries.mockClear();
    });
  });
});
