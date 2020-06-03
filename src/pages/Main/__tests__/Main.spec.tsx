import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Main from '../index';
import payload from '../../../utils/tests/payloadMock';

const mockStore = configureMockStore([]);

describe('<Main/> component', () => {
  it('should render a list with the countries requested in the api', () => {
    expect.hasAssertions();

    const applicationState = {
      countries: {
        data: payload,
        loading: false,
        error: false,
      },
    };

    const store = mockStore(applicationState);

    const wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );

    const countriesList = wrapper.find('li[data-test="countries-list"]');

    expect(countriesList).toHaveLength(2);
    expect(countriesList).toMatchInlineSnapshot('ReactWrapper {}');
  });
  it('should appear a loading information if the page dont finished the countries fetch', () => {
    expect.hasAssertions();

    const applicationState = {
      countries: {
        data: [],
        loading: true,
        error: false,
      },
    };

    const store = mockStore(applicationState);

    const wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>,
    );

    const loadinElement = wrapper.find('[data-test="loading-element"]');

    expect(loadinElement).toHaveLength(1);
    expect(loadinElement).toMatchInlineSnapshot('ReactWrapper {}');
  });
});
