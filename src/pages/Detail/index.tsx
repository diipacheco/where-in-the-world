/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { ApplicationState } from '../../store/index';
import { handleLoadFilterAlphaRequest } from '../../store/modules/countries/actions/filterCountriesByAlpha.actions';

import {
  Container,
  Content,
  ParagraphsGroup,
  LinkContainer,
} from './styles';

const Detail: React.FC = () => {
  const { id } = useParams();
  const countries = useSelector((state: ApplicationState) => state.countries.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleLoadFilterAlphaRequest(id));
  }, [dispatch, id]);

  return (
    <Container>
      <LinkContainer>
        <Link
          to="/"
          data-test="back"
        >
          <FaArrowLeft color="hsl(200, 15%, 8%)" />
          Back
        </Link>
      </LinkContainer>
      {countries.map((country) => country.alpha3Code === id && (
      <Content key={country.name}>
        <img
          src={country.flag}
          alt={`Flag of ${country.name}`}
          data-test="country-flag"
        />
        <section
          className="content"
          data-test="detailed-informations"
        >
          <h1>{country.name}</h1>
          <ParagraphsGroup>
            <div>
              <p>
                <strong>Native Name:</strong>
                <span>{country.nativeName}</span>
              </p>
              <p>
                <strong>Population:</strong>
                <span>{country.population}</span>
              </p>
              <p>
                <strong>Region:</strong>
                <span>{country.region}</span>
              </p>
              <p>
                <strong>Sub Region:</strong>
                <span>{country.subregion}</span>
              </p>
              <p>
                <strong>Native Name:</strong>
                <span>{country.nativeName}</span>
              </p>
              <p>
                <strong>Capital:</strong>
                <span>{country.capital}</span>
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain:</strong>
                {country.topLevelDomain.map((level) => (
                  <span key={level}>{level}</span>
                ))}
              </p>
              <p>
                <strong>Currencies:</strong>
                {country.currencies.map((currency) => (
                  <span key={currency.code}>{currency.name}</span>
                ))}
              </p>
              <p>
                <strong>Languages:</strong>
                {country.languages.map((language) => (
                  <span key={language.nativeName}>{language.nativeName}</span>
                ))}
              </p>
            </div>
          </ParagraphsGroup>

          <footer className="borders">
            <h4>Border Countries:</h4>
            <div id="container-links">
              {country.borders.map((border) => (

                <Link key={border} to={`/detail/${border}`}>
                  {border}
                </Link>
              ))}
            </div>
          </footer>
        </section>
      </Content>
      ))}
    </Container>
  );
};
export default Detail;
