/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';

import light from '../../styles/themes/light';

interface Param {
  children: ReactNode
}

const getThemeProviderWrappingComponent = (theme: Object) => ({ children }: Param) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
);


export default (component: ReactElement, theme: Object = light) => {
  const wrapper = mount(component, {
    wrappingComponent: getThemeProviderWrappingComponent(theme),
  });

  return wrapper;
};
