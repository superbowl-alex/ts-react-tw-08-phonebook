import { FC } from 'react';
import { useAuth } from '../../redux/hooks';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { MdContactPhone } from "react-icons/md";

const Header: FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className='flex-grow'>
      <header className='fixed flex flex-col w-full z-50 top-0 left-auto right-0 bg-lightBlue text-deepBlue shadow-lg'>
        <div className='flex items-center relative px-6 min-h-[64px]'>
          <div className='flex gap-4 items-center flex-grow'>
            <MdContactPhone className='w-[50px] h-[50px] inline-block flex-shrink-0 mr-4 text-deepBlue'/>
            <Navigation />
          </div>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
    </div>
  );
};

export default Header;
