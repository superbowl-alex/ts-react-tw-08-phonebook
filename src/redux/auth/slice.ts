import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const actions = [register, logIn, logOut];

const getActions = (type: 'fulfilled' | 'pending' | 'rejected') => actions.map(action => action[type]);

export type User = {
  name: string;
  email: string;
}

export type AuthState = {
  user: User;
  token: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: any;
};

const initialAuthState: AuthState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const anyPendingReducer = (state: AuthState) => {
  state.isLoading = true;
};

const anyRejectReducer = (state: AuthState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authRegisterOrLogInSuccessReducer = (state: AuthState, action: PayloadAction<AuthState>) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const authLogOutSuccessReducer = (state: AuthState) => {
  state.user = { name: '', email: '' };
  state.token = '';
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

const authRefreshPendingReducer = (state: AuthState) => {
  state.isRefreshing = true;
};

const authRefreshFulfilledReducer = (state: AuthState, action: PayloadAction<User>) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.isLoading = false;
  state.error = null;
};

const authRefreshRejactedReducer = (state: AuthState, action: PayloadAction<unknown>) => {
  state.error = action.payload;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, authLogOutSuccessReducer)
      .addCase(refreshUser.pending, authRefreshPendingReducer)
      .addCase(refreshUser.fulfilled, authRefreshFulfilledReducer)
      .addCase(refreshUser.rejected, authRefreshRejactedReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        authRegisterOrLogInSuccessReducer
      )
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectReducer as any),
});

export const authReducer = authSlice.reducer;
