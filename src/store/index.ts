/* eslint-disable no-unused-vars */
import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { CountriesState } from './modules/countries/types';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';


export interface ApplicationState {
  countries: CountriesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
