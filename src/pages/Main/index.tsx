/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ApplicationState } from '../../store/index';
import { handleLoadRequest } from '../../store/modules/countries/actions';

import {
  Container, List, ListItem,
} from './styles';

const Main: React.FC = () => {
  const { data: countries, loading } = useSelector((state: ApplicationState) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLoadRequest());
  }, [dispatch]);

  return (
    <Container>
      {loading ? (
        <h1 data-test="loading-element">loading...</h1>
      ) : (
        <List>
          {countries?.map((country) => (
            <ListItem key={country.name} data-test="countries-list">
              <img src={country.flag} alt={`Flag from ${country.name}`} />

              <section className="country-infos">
                <h1>{country.name}</h1>

                <div className="country-details">
                  <p>
                    <strong>
                      Population:
                    </strong>
                    {country.population}
                  </p>
                  <p>
                    <strong>
                      Region:
                    </strong>
                    {country.region}
                  </p>
                  <p>
                    <strong>
                      Capital:
                    </strong>
                    {country.capital}
                  </p>
                </div>
              </section>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Main;
