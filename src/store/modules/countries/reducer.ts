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
      draft.data = action.payload.countries;
      break;
    }
    case CountriesTypes.LOAD_FAILURE: {
      draft.loading = false;
      draft.error = true;
      break;
    }
    default:
  }
});

export default reducer;
