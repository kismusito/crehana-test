import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      code
      currency
      emoji
    }
    continents {
      name
      code
    }
  }
`;

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      continent {
        code
        name
      }
      languages {
        code
        name
      }
      capital
    }
  }
`;
