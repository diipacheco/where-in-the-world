import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import api from '../../../services/api';
import * as actions from './actions';
import { CountriesTypes } from './types';

export function* handleLoadRequestAction() {
  try {
    const response = yield call(api.get, '/all');
    yield put(actions.handleLoadSuccess(response.data));
  } catch (error) {
    yield put(actions.handleLoadFailure());
  }
  return yield null;
}

interface Payload {
  country: string
}

export function* handleLoadSearchRequestAction({ country }: Payload) {
  try {
    const response = yield call(api.get, `/name/${country}?fullText=true`);
    yield put(actions.handleLoadSearchSuccess(response.data));
  } catch (error) {
    yield put(actions.handleLoadSearchFailure(error.message));
  }
}

export default all([
  takeLatest(CountriesTypes.LOAD_REQUEST, handleLoadRequestAction),
  takeLatest(CountriesTypes.LOAD_SEARCH_REQUEST, handleLoadRequestAction),
]);
