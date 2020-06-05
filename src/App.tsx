/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './utils/usePersistedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';


import Header from './components/Header';
import Global from './styles/global';
import Routes from './routes';
import store from './store';
import history from './services/history';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Header toggleTheme={toggleTheme} />
          <Routes />
          <Global />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
