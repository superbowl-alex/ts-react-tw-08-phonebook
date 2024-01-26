import { FC, ReactNode } from 'react';
import { useAuth } from '../redux/hooks';
import { Navigate } from 'react-router-dom';

interface IRestrictedRoute {
  component: ReactNode;
  redirectTo?: string;
}

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

const RestrictedRoute: FC<IRestrictedRoute> = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo}/> : Component;
};

export default RestrictedRoute;
