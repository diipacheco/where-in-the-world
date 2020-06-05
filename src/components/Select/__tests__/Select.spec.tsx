import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import mountWithTheme from '../../../utils/tests/moutWithTheme';

import Select from '../index';

const mockStore = configureMockStore([]);

describe('<Select/> component', () => {
  it('should be able to filter countries by Continent', () => {
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
        <Select />
      </Provider>,
    );

    const selectElement = wrapper.find('select[data-test="continent-select"]');

    expect(selectElement).toHaveLength(1);
    expect(Select).toMatchInlineSnapshot('[Function]');
  });
});
