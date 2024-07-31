export const getCurrencies = (countries: Country[]) => {
  const currencies: Options[] = [];
  countries?.forEach((country) => {
    if (!currencies.find((item) => item.key === country.currency)) {
      if (country.currency) {
        currencies.push({
          key: country.currency,
          value: country.currency,
        });
      }
    }
  });
  return currencies;
};
