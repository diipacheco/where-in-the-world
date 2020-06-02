import { all } from 'redux-saga/effects';

import countries from './countries/sagas';

export default function* rootSaga() {
  return yield all([countries]);
}
