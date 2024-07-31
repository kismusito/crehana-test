type Country = {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: Continent;
  capital?: string;
  currency?: string;
  languages: Language[];
  emoji: string;
  emojiU: string;
  states: State[];
};

type Continent = {
  code: string;
  name: string;
  countries: Country[];
};

type Language = {
  code: string;
  name?: string;
  native?: string;
  rtl: boolean;
};

type State = {
  code?: string;
  name: string;
  country: Country;
};

type Options = {
  value: string;
  key: string;
};

type FilterCountry = {
  name?: string | null;
  currency?: string | null;
  continent?: string | null;
};

type FilterCountryQuery = {
  code?: FilterInput;
  continent?: FilterInput;
  currency?: FilterInput;
};

type DefaultResponse = {
  isLoading: boolean;
  isError: ApolloError | undefined;
};

interface GetCountryResponse extends DefaultResponse {
  country: Country | null;
}

interface GetCountriesResponse extends DefaultResponse {
  countries: Country[] | null;
  continents: Continent[];
  currencies: Options[];
}

type Params = {
  [key: string]: string;
};