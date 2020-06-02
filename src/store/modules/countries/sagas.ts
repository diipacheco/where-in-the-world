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

export default all([
  takeLatest(CountriesTypes.LOAD_REQUEST, handleLoadRequestAction),
]);
