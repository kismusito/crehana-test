import { GET_COUNTRY } from '@/api/queries';
import { useQuery } from '@apollo/client';

export const useGetCountry = (code: string | undefined): GetCountryResponse => {
  const {
    data,
    loading: isLoading,
    error: isError,
  } = useQuery(GET_COUNTRY, {
    variables: { code },
  });

  return {
    country: data?.country,
    isLoading,
    isError,
  };
};
