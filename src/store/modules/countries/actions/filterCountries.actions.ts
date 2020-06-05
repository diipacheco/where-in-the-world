/* eslint-disable no-unused-vars */
import { action } from 'typesafe-actions';

import { CountriesTypes, Country } from '../types';

export const handleLoadFilterRequest = (continent: string) => action(CountriesTypes.LOAD_FILTER_REQUEST, { continent });

export const handleLoadFilterSuccess = (countries: Country[]) => action(CountriesTypes.LOAD_FILTER_SUCCESS, { countries });

export const handleLoadFilterFailure = (message: string) => action(CountriesTypes.LOAD_FILTER_FAILURE, { message });
