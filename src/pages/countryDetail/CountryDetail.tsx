import { EmptyState, Loader, Navbar } from '@/components';
import { useGetCountry } from '@/hooks/useGetCountry';
import ReactCountryFlag from 'react-country-flag';
import { useNavigate, useParams } from 'react-router-dom';

function CountryDetail() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { country, isLoading, isError } = useGetCountry(code);

  if (isLoading) {
    return <Loader title='Loading country...' type='page' />;
  }

  if (isError || !country) {
    return (
      <EmptyState
        title='Error loading country'
        type='page'
        action={{
          title: 'Go back to home',
          to: '/',
        }}
      />
    );
  }

  return (
    <>
      <Navbar />

      <div className='relative overflow-hidden'>
        <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24'>
          <button
            onClick={() => navigate('/')}
            className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none'
          >
            Back
          </button>
          <div className='flex flex-col w-full justify-center items-center'>
            <ReactCountryFlag
              style={{
                width: '6em',
                height: '6em',
              }}
              svg
              countryCode={country.code}
            />
            <h1 className='text-4xl font-medium text-gray-800 '>
              {country.name}
            </h1>
          </div>
          <div className='flex flex-col mt-10'>
            <div className='-m-1.5 overflow-x-auto'>
              <div className='p-1.5 min-w-full inline-block align-middle'>
                <div className='overflow-hidden'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                        >
                          Code
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                        >
                          Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                        >
                          Currency
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                        >
                          Continent
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                        >
                          Languages
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                        >
                          Capital
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 '>
                      <tr>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
                          {country?.code}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
                          {country?.name}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
                          {country?.currency}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
                          {country?.continent?.name}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
                          {country?.languages
                            .map((lang) => lang.name)
                            .join(', ')}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
                          {country?.capital}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
