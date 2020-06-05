import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { handleLoadFilterRequest } from '../../store/modules/countries/actions/filterCountries.actions';
import Container from './styles';

const Select: React.FC = () => {
  const [selected, setSelected] = useState('');

  const options = [
    { label: 'Africa', value: 'africa' },
    { label: 'America', value: 'americas' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    if (selected.length > 1) {
      dispatch(handleLoadFilterRequest(selected));
    }
  }, [selected, dispatch]);

  return (
    <Container>
      <select
        onChange={({ target }) => setSelected(target.value)}
        name="filter"
        id="filter"
        data-test="continent-select"
      >
        <option disabled={selected.length > 1} defaultValue="placeholder">Filter by Region</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
