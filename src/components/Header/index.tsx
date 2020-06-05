import React, { useContext } from 'react';
import { FaRegMoon, FaMoon } from 'react-icons/fa';
import { func } from 'prop-types';

import { ThemeContext } from 'styled-components';
import { Container, Switch } from './styles';

interface Props {
  toggleTheme:() => void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <h1>Where in the world?</h1>
      <Switch
        type="button"
        data-test="theme-switcher"
        onClick={toggleTheme}
      >
        {title === 'dark' ? (
          <FaMoon
            size={18}
            color={colors.text}
          />
        ) : (
          <FaRegMoon
            size={18}
            color={colors.text}
          />
        )}
        <h3>
          Dark Mode
        </h3>
      </Switch>
    </Container>
  );
};

Header.propTypes = {
  toggleTheme: func.isRequired,
};

export default Header;
