import React from 'react';

import mountWithTheme from '../../../utils/tests/moutWithTheme';
import dark from '../../../styles/themes/dark';

import Header from '../index';

describe('<Header/> Component', () => {
  it('should be able to switch themes', () => {
    expect.hasAssertions();

    const wrapper = mountWithTheme(
      <Header toggleTheme={() => localStorage.setItem('theme', JSON.stringify(dark))} />,
    );

    const switchElement = wrapper.find('button[data-test="theme-switcher"]');

    switchElement.simulate('click');

    expect(switchElement).toHaveLength(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', JSON.stringify(dark));
  });
});
