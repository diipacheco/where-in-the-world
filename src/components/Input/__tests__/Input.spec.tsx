import React from 'react';
import * as ReactRedux from 'react-redux';
import { mount } from 'enzyme';

import Input from '../index';

jest.mock('react-redux');

describe('<Input/> Element', () => {
  it('should search a country with success', () => {
    expect.hasAssertions();

    const wrapper = mount(<Input defaultText="" />);
    const inputElement = wrapper.find('[data-test="search-input"]');

    inputElement.simulate('change', { target: { value: 'Brazil' } });

    const dispatch = jest.fn();
    const spyOnUseDispatch = jest
      .spyOn(ReactRedux, 'useDispatch')
      .mockImplementation(dispatch);

    expect(spyOnUseDispatch).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchInlineSnapshot('ReactWrapper {}');

    spyOnUseDispatch.mockRestore();
  });
});
