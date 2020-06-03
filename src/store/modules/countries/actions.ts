/* eslint-disable no-unused-vars */
import { action } from 'typesafe-actions';

import { CountriesTypes, Country } from './types';

/**
 * Actions whos handle the request for all countries
 */

export const handleLoadRequest = () => action(CountriesTypes.LOAD_REQUEST);

export const handleLoadSuccess = (countries: Country[]) => action(CountriesTypes.LOAD_SUCCESS, { countries });

export const handleLoadFailure = () => action(CountriesTypes.LOAD_FAILURE);

/**
 * Actions whos handle the request for countries based on country name
 */

export const handleLoadSearchRequest = (countryName: string) => action(CountriesTypes.LOAD_SEARCH_REQUEST, { countryName });

export const handleLoadSearchSuccess = (country: Country[]) => action(CountriesTypes.LOAD_SEARCH_SUCCESS, { country });

export const handleLoadSearchFailure = (message: string) => action(CountriesTypes.LOAD_SEARCH_FAILURE, { message });
