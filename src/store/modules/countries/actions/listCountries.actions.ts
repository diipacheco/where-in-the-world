/* eslint-disable no-unused-vars */
import { action } from 'typesafe-actions';

import { CountriesTypes, Country } from '../types';

export const handleLoadRequest = () => action(CountriesTypes.LOAD_REQUEST);

export const handleLoadSuccess = (countries: Country[]) => action(CountriesTypes.LOAD_SUCCESS, { countries });

export const handleLoadFailure = () => action(CountriesTypes.LOAD_FAILURE);
