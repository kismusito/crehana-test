import { useNavigate, useSearchParams } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';

import { useGetCountries } from '@/hooks/useGetCountries';

import { Card, Loader, Input, Navbar, EmptyState } from '@/components';

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const { countries, continents, currencies, isLoading, isError } =
    useGetCountries({
      name: searchParams.get('name'),
      continent: searchParams.get('continent'),
      currency: searchParams.get('currency'),
    });

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const formValues = new FormData(e.currentTarget);
    const name = formValues.get('name') as string;
    const continent = formValues.get('continent') as string;
    const currency = formValues.get('currency') as string;

    setSearchParams({
      name: name || '',
      continent: continent || '',
      currency: currency || '',
    });
  };

  return (
    <>
      <Navbar />
      <div className='relative overflow-hidden'>
        <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-6xl font-bold text-gray-800 '>
              Country search
            </h1>

            <p className='mt-3 text-gray-600 '>
              Search for countries by name, region, subregion, capital,
              language, or currency.
            </p>

            <div className='mt-7 sm:mt-12 mx-auto max-w-xl relative'>
              <form onSubmit={handleSubmitForm}>
                <Input
                  placeholder='Search country'
                  name='name'
                  defaultValue={searchParams.get('name') || ''}
                  filters={[
                    {
                      id: 'continent',
                      defaultValue: searchParams.get('continent') || '',
                      label: 'Select continent',
                      options: continents?.map((continent) => ({
                        label: continent.name,
                        value: continent.code,
                      })),
                    },
                    {
                      id: 'currency',
                      defaultValue: searchParams.get('currency') || '',
                      label: 'Select currency',
                      options: currencies?.map((currency) => ({
                        label: currency.key,
                        value: currency.value,
                      })),
                    },
                  ]}
                />
              </form>

              <div className='hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20'>
                <svg
                  className='w-16 h-auto text-orange-500'
                  width='121'
                  height='135'
                  viewBox='0 0 121 135'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164'
                    stroke='currentColor'
                    strokeWidth='10'
                    strokeLinecap='round'
                  />
                  <path
                    d='M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5'
                    stroke='currentColor'
                    strokeWidth='10'
                    strokeLinecap='round'
                  />
                  <path
                    d='M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874'
                    stroke='currentColor'
                    strokeWidth='10'
                    strokeLinecap='round'
                  />
                </svg>
              </div>

              <div className='hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32'>
                <svg
                  className='w-40 h-auto text-cyan-500'
                  width='347'
                  height='188'
                  viewBox='0 0 347 188'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426'
                    stroke='currentColor'
                    strokeWidth='7'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
            </div>

            {(isError || countries?.length === 0) && (
              <EmptyState title='No countries found' />
            )}

            {isLoading && <Loader title='Loading countries' />}

            {!isLoading && (
              <div className='mt-10 sm:mt-20'>
                {countries?.map((country, index) => (
                  <Card
                    key={`country-${index}`}
                    slot={<ReactCountryFlag countryCode={country?.code} svg />}
                    title={country?.name}
                    onClick={() => navigate(`/country/${country?.code}`)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
