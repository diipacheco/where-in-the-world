/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ApplicationState } from '../../store/index';
import { handleLoadRequest } from '../../store/modules/countries/actions';

import Input from '../../components/Input';
import Select from '../../components/Select';

import {
  Container,
  Content,
  ListContainer,
  ListItem,
} from './styles';

const Main: React.FC = () => {
  const {
    data: countries, loading, error, errorMessage,
  } = useSelector((state: ApplicationState) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLoadRequest());
  }, [dispatch]);

  return (
    <Container>
      <Content>
        <nav className="inputs-container">
          <Input defaultText="" />
          <Select />
        </nav>
        {loading ? (
          <h1 data-test="loading-element">loading...</h1>
        ) : (
          <ListContainer>
            {error && errorMessage ? (
              <h1>{errorMessage}</h1>
            ) : (
              <>
                {countries?.map((country) => (

                  <ListItem key={country.name} data-test="countries-list">
                    <img src={country.flag} alt={`Flag from ${country.name}`} />
                    <Link to={`/detail/${country.alpha3Code}`}>
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
                    </Link>
                  </ListItem>
                ))}
              </>
            )}
          </ListContainer>
        )}
      </Content>
    </Container>
  );
};

export default Main;
