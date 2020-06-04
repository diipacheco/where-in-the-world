import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import payload from '../../../utils/tests/payloadMock';


import Input from '../index';

const mockStore = configureMockStore([]);

describe('<Input/> Element', () => {
  it('should be able to search a country', () => {
    expect.hasAssertions();

    const applicationState = {
      countries: {
        data: payload,
        loading: true,
        error: false,
      },
    };

    const store = mockStore(applicationState);

    const wrapper = mount(
      <Provider store={store}>
        <Input defaultText="" />
      </Provider>,
    );
    const inputElement = wrapper.find('[data-test="search-input"]');

    expect(inputElement).toHaveLength(1);
    expect(wrapper).toMatchInlineSnapshot('ReactWrapper {}');
  });
});
