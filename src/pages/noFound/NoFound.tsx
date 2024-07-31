import { useNavigate } from 'react-router-dom';

function NoFound() {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <main id='content'>
        <div className='text-center py-10 px-4 sm:px-6 lg:px-8'>
          <h1 className='block text-7xl font-bold text-gray-800 sm:text-9xl '>
            404
          </h1>
          <p className='mt-3 text-gray-600 '>Oops, something went wrong.</p>
          <p className='text-gray-600 '>Sorry, we couldn't find your page.</p>
          <div className='mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3'>
            <button
              className='w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
              onClick={() => navigate('/')}
            >
              Go to main page
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NoFound;
