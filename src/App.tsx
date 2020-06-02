import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Global from './styles/global';
import Routes from './routes';
import store from './store';
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <Global />
      </Router>
    </Provider>
  );
}

export default App;
