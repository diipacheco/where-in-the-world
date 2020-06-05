/* eslint-disable react/prop-types */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';

import payload from '../../../utils/tests/payloadMock';
import Detail from '../index';

const mockStore = configureMockStore([]);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 'BRA',
  }),
  useRouteMatch: () => ({ url: '/detail/:id' }),
}));

describe('<Detail/> component', () => {
  it('should render a single one country and his detailed informations', () => {
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
        <MemoryRouter>
          <Detail />
        </MemoryRouter>
      </Provider>,
    );

    const countryFlag = wrapper.find('[data-test="country-flag"]');
    const detailedInformations = wrapper.find(
      '[data-test="detailed-informations"]',
    );

    expect(countryFlag).toHaveLength(1);
    expect(detailedInformations).toHaveLength(1);
    expect(wrapper).toMatchInlineSnapshot('ReactWrapper {}');
  });

  it('should be able to return to the main page', () => {
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
        <MemoryRouter>
          <Detail />
        </MemoryRouter>
      </Provider>,
    );

    const linkElement = wrapper.find('a[data-test="back"]');

    linkElement.simulate('click');

    expect(linkElement).toHaveLength(1);
  });
});
