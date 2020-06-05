import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';

import api from '../../../../services/api';
import {
  handleLoadSuccess,
  handleLoadFailure,
  handleLoadSearchSuccess,
  handleLoadSearchFailure,
  handleLoadSearchRequest,
  handleLoadFilterRequest,
  handleLoadFilterSuccess,
  handleLoadFilterFailure,
} from '../actions';
import { CountriesTypes } from '../types';

export function* handleLoadRequestAction() {
  try {
    const response = yield call(api.get, '/all');
    yield put(handleLoadSuccess(response.data));
  } catch (error) {
    yield put(handleLoadFailure());
  }
  return yield null;
}


export function* handleLoadSearchRequestAction({ payload }: ReturnType<typeof handleLoadSearchRequest>) {
  try {
    const response = yield call(api.get, `/name/${payload.countryName}?fullText=true`);
    yield put(handleLoadSearchSuccess(response.data));
  } catch (error) {
    yield put(handleLoadSearchFailure('flag not found, please typed another one'));
  }
}

export function* handleLoadFilterRequestAction({ payload }: ReturnType<typeof handleLoadFilterRequest>) {
  try {
    const response = yield call(api.get, `/region/${payload.continent}`);
    yield put(handleLoadFilterSuccess(response.data));
  } catch (error) {
    yield put(handleLoadFilterFailure('Something is going wrong, please try latter'));
  }
}

export default all([
  takeLatest(CountriesTypes.LOAD_REQUEST, handleLoadRequestAction),
  takeLatest(CountriesTypes.LOAD_SEARCH_REQUEST, handleLoadSearchRequestAction),
  takeLatest(CountriesTypes.LOAD_FILTER_REQUEST, handleLoadFilterRequestAction),
]);
