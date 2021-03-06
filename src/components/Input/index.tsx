import React, {
  useState, useCallback, useEffect, useContext,
} from 'react';
import { useDispatch } from 'react-redux';
import { useDebouncedCallback } from 'use-debounce';
import { string } from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import { ThemeContext } from 'styled-components';
import { handleLoadSearchRequest, handleLoadRequest } from '../../store/modules/countries/actions';

import Container from './styles';

interface Props {
  defaultText: string
}

const Input: React.FC<Props> = ({ defaultText }) => {
  const [inputText, setInputText] = useState(defaultText);
  const dispatch = useDispatch();
  const { title, colors } = useContext(ThemeContext);


  const [debouncedFunction] = useDebouncedCallback(
    useCallback((value: string) => {
      setInputText(value);
    }, []),
    1000,
    { maxWait: 1500 },
  );

  useEffect(() => {
    function handleDispatches() {
      if (inputText.length > 1) {
        dispatch(handleLoadSearchRequest(inputText));
      } else {
        dispatch(handleLoadRequest());
      }
    }
    handleDispatches();
  }, [dispatch, inputText]);

  return (
    <Container>
      <FaSearch color={title === 'dark' ? colors.text : 'hsl(0, 0%, 52%)'} />
      <input
        placeholder="Search for a country..."
        type="text"
        name="search"
        onChange={({ target }) => debouncedFunction(target.value)}
        defaultValue={defaultText}
        data-test="search-input"
      />
    </Container>
  );
};

Input.propTypes = {
  defaultText: string.isRequired,
};

export default Input;
