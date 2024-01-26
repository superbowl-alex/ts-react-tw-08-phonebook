import { Outlet } from 'react-router-dom';
import { Suspense, FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';
import Loader from '../Loader';

const Layout: FC = () => {
  return (
    <div className='max-w-7xl bg-secondaryLight h-screen px-6 mx-auto'>
      <Header />
      <div className='w-full pt-36'>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer style={{ minHeight: '70px', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default Layout;
