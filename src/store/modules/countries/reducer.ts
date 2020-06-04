/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import produce from 'immer';
import { Reducer } from 'redux';

import { CountriesTypes, CountriesState } from './types';

const INITIAL_STATE: CountriesState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<CountriesState> = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  switch (action.type) {
    case CountriesTypes.LOAD_REQUEST: {
      draft.loading = true;
      break;
    }
    case CountriesTypes.LOAD_SUCCESS: {
      draft.loading = false;
      draft.error = false;
      draft.data = action.payload.countries;
      break;
    }
    case CountriesTypes.LOAD_FAILURE: {
      draft.loading = false;
      draft.error = true;
      break;
    }
    case CountriesTypes.LOAD_SEARCH_REQUEST: {
      draft.loading = true;
      break;
    }
    case CountriesTypes.LOAD_SEARCH_SUCCESS: {
      draft.loading = false;
      draft.error = false;
      draft.data = action.payload.country;
      break;
    }
    case CountriesTypes.LOAD_SEARCH_FAILURE: {
      draft.loading = false;
      draft.error = true;
      draft.errorMessage = action.payload.message;
      break;
    }
    case CountriesTypes.LOAD_FILTER_REQUEST: {
      draft.loading = true;
      break;
    }
    case CountriesTypes.LOAD_FILTER_SUCCESS: {
      draft.loading = false;
      draft.data = action.payload.countries;
      break;
    }
    case CountriesTypes.LOAD_FILTER_FAILURE: {
      draft.loading = false;
      draft.error = true;
      draft.errorMessage = action.payload.message;
      break;
    }
    default:
  }
});

export default reducer;
