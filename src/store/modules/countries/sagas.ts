import { call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import * as actions from './actions';

export default function* gen() {
  try {
    const response = yield call(api.get, '/all');
    yield put(actions.handleLoadSuccess(response.data));
  } catch (error) {
    yield put(actions.handleLoadFailure());
  }
  return yield null;
}
