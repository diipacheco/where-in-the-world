/* eslint-disable no-unused-vars */
import { action } from 'typesafe-actions';

import { CountriesTypes, Country } from '../types';

export const handleLoadSearchRequest = (countryName: string) => action(CountriesTypes.LOAD_SEARCH_REQUEST, { countryName });

export const handleLoadSearchSuccess = (country: Country[]) => action(CountriesTypes.LOAD_SEARCH_SUCCESS, { country });

export const handleLoadSearchFailure = (message: string) => action(CountriesTypes.LOAD_SEARCH_FAILURE, { message });
