import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type {RootState, AppDispatch} from './store';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectError,
} from './auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
    error,
  };
};
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
