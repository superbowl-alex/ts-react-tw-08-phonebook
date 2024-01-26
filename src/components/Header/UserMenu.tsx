import { FC } from 'react';
import { logOut } from '../../redux/auth/operations';
import { useAuth, useAppDispatch } from '../../redux/hooks';

const UserMenu: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const firstLetter = user.name[0].toUpperCase();

  return (
    <div className='flex items-center gap-4'>
      <div className='bg-deepBlue flex flex-shrink-0 items-center justify-center w-[40px] h-[40px] rounded-full text-3xl leading-5 overflow-hidden text-white'>{firstLetter}</div>
      <p className='text-3xl'>
        Welcome, {user.name}
      </p>
      <button className='inline-flex items-center justify-center relative outline-none border-none m-0 no-underline uppercase min-w-[64px] px-4 py-2 text-deepBlue text-lg font-medium bg-primaryLight shadow-lg rounded-[4px] transition-all duration-300 hover:scale-[1.05] hover:text-white hover:bg-deepBlue'
        onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
