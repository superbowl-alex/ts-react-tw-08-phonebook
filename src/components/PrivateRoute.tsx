import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/hooks';

interface IPrivateRoute {
  component: ReactNode;
  redirectTo?: string;
}

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

const PrivateRoute: FC<IPrivateRoute> = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
