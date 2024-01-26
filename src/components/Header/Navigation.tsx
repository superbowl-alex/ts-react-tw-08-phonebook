import { Link } from 'react-router-dom';
import { useAuth } from '../../redux/hooks';
import { FC } from 'react';

const Navigation: FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div className='flex items-center gap-4'>
        <Link to="/" className='inline-flex items-center justify-center relative outline-none border-none m-0 no-underline uppercase min-w-[64px] px-4 py-2 text-deepBlue text-lg font-medium bg-primaryLight shadow-lg transition-all duration-300 hover:scale-[1.05] hover:text-white hover:bg-deepBlue rounded-[4px]'>
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/contacts" className='inline-flex items-center justify-center relative outline-none border-none m-0 no-underline uppercase min-w-[64px] px-4 py-2 text-deepBlue text-lg font-medium bg-primaryLight shadow-lg transition-all duration-300 hover:scale-[1.05] hover:text-white hover:bg-deepBlue rounded-[4px]'>
            Contacts
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
