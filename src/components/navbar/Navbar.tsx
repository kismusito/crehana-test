import crehanaLogo from '@/assets/svg/logo.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header className='flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7'>
      <nav className='relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 mx-auto'>
        <div className='md:col-span-12' onClick={() => navigate('/')}>
          <img
            src={`${crehanaLogo}`}
            className='w-40 object-contain cursor-pointer'
            alt='Crehana Logo'
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
