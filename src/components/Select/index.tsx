import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { handleLoadFilterRequest } from '../../store/modules/countries/actions/filterCountries.actions';
import { Container, Content } from './styles';

interface Options {
  label: string
  value: string
}

const Select: React.FC = () => {
  const [selected, setSelected] = useState<Options[]>([]);

  const options = [
    { label: 'Africa', value: 'africa' },
    { label: 'America', value: 'americas' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    if (selected.length >= 1) {
      selected.map((option) => (
        dispatch(handleLoadFilterRequest(option.value))
      ));
    }
  }, [selected]);

  return (
    <Container>
      <Content
        options={options}
        hasSelectAll={false}
        value={selected}
        disableSearch
        onChange={setSelected}
        labelledBy="Teste"
      />
    </Container>
  );
};

export default Select;
