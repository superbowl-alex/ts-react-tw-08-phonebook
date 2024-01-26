import { FC } from 'react';
import { Link } from 'react-router-dom';

const AuthNav: FC = () => {
  return (
    <div className='flex items-center gap-4'>
      <Link to="/register" className='inline-flex items-center justify-center relative outline-none border-none m-0 no-underline uppercase min-w-[64px] px-4 py-2 text-deepBlue text-lg font-medium bg-primaryLight shadow-lg rounded-[4px] transition-all duration-300 hover:scale-[1.05] hover:text-white hover:bg-deepBlue'>
        Register
      </Link>
      <Link to="/login" className='inline-flex items-center justify-center relative outline-none border-none m-0 no-underline uppercase min-w-[64px] px-4 py-2 text-deepBlue text-lg font-medium bg-primaryLight shadow-lg rounded-[4px] transition-all duration-300 hover:scale-[1.05] hover:text-white hover:bg-deepBlue'>
        Log In
      </Link>
    </div>
  );
};

export default AuthNav;
