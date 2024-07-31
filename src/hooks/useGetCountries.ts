import { GET_COUNTRIES } from '@/api/queries';
import { getCurrencies } from '@/utilities/actions/getCurrencies';
import { useQuery } from '@apollo/client';

export const useGetCountries = ({
  name,
  continent,
  currency,
}: FilterCountry): GetCountriesResponse => {
  let filter: FilterCountryQuery = {};

  if (continent) {
    filter.continent = { eq: continent };
  }

  if (currency) {
    filter.currency = { eq: currency };
  }

  const {
    data,
    loading: isLoading,
    error: isError,
  } = useQuery(GET_COUNTRIES, {
    variables: { filter },
  });

  let countries: Country[] = data?.countries;

  if (name) {
    countries = countries?.filter((country) =>
      country.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  return {
    countries,
    continents: data?.continents,
    currencies: getCurrencies(data?.countries),
    isError,
    isLoading,
  };
};
