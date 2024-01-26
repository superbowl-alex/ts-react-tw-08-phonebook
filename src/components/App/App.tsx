import { useEffect, lazy, FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth, useAppDispatch } from '../../redux/hooks';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../Layout';
import RestrictedRoute from '../../components/RestrictedRoute';
import PrivateRoute from '../../components/PrivateRoute';
import Loader from '../Loader';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;