import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import mountWithTheme from '../../../utils/tests/moutWithTheme';

import Main from '../index';
import payload from '../../../utils/tests/payloadMock';

const mockStore = configureMockStore([]);

describe('<Main/> component', () => {
  it('should render a list of countries', () => {
    expect.hasAssertions();

    const applicationState = {
      countries: {
        data: payload,
        loading: false,
        error: false,
      },
    };

    const store = mockStore(applicationState);

    const wrapper = mountWithTheme(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>,
    );

    const countriesList = wrapper.find('li[data-test="countries-list"]');

    expect(countriesList).toHaveLength(2);
    expect(countriesList).toMatchInlineSnapshot('ReactWrapper {}');
  });
  it('should appear a loading information if the page dont finished the countries render', () => {
    expect.hasAssertions();

    const applicationState = {
      countries: {
        data: [],
        loading: true,
        error: false,
      },
    };

    const store = mockStore(applicationState);

    const wrapper = mountWithTheme(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>,
    );

    const loadinElement = wrapper.find('[data-test="loading-element"]');

    expect(loadinElement).toHaveLength(1);
    expect(loadinElement).toMatchInlineSnapshot('ReactWrapper {}');
  });
});
