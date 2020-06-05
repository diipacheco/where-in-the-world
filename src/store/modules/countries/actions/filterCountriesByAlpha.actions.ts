/* eslint-disable no-unused-vars */
import { action } from 'typesafe-actions';

import { CountriesTypes, Country } from '../types';

export const handleLoadFilterAlphaRequest = (code: string) => action(CountriesTypes.LOAD_ALPHA_FILTER_REQUEST, { code });

export const handleLoadFilterAlphaSuccess = (country: Country[]) => action(CountriesTypes.LOAD_ALPHA_FILTER_SUCCESS, { country });

export const handleLoadFilterAlphaFailure = (message: string) => action(CountriesTypes.LOAD_ALPHA_FILTER_FAILURE, { message });
