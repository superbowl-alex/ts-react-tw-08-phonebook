import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from '../auth/operations';

const actions = [fetchContacts, addContact, deleteContact, logOut];

const getActions = (type: 'fulfilled' | 'pending' | 'rejected') => actions.map(action => action[type]);

export type Contact = {
  id: string;
  name: string;
  number: string;
}

export type Data = {
  name: string;
  number: string;
}

type ContactsState = {
  items: Contact[];
  isLoading: boolean;
  isDeleting: boolean;
  error: any;
}

const initialContactsState: ContactsState = {
  items: [],
  isLoading: false,
  isDeleting: false,
  error: null,
};

const fetchContactsPendingReducer = (state: ContactsState) => {
  state.isLoading = true;
};

const deletePendingReducer = (state: ContactsState) => {
  state.isDeleting = true;
};

const fetchContactsSuccessReducer = (state: ContactsState, action: PayloadAction<Contact[]>) => {
  state.items = action.payload;
  state.isLoading = false;
};

const addContactsSuccessReducer = (state: ContactsState, action: PayloadAction<Contact>) => {
  state.items.push(action.payload);
  state.isLoading = false;
};

const deleteContactsSuccessReducer = (state: ContactsState, action: PayloadAction<Contact>) => {
  state.isDeleting = false;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const logOutSuccessReducer = (state: ContactsState) => {
  state.items = [];
  state.isLoading = false;
};

const anySuccessReducer = (state: ContactsState) => {
  state.error = null;
};

const anyRejectReducer = (state: ContactsState, action: PayloadAction<string>) => {
  state.error = action.payload;
  state.isDeleting = false;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactsSuccessReducer)
      .addCase(deleteContact.pending, deletePendingReducer)
      .addCase(deleteContact.fulfilled, deleteContactsSuccessReducer)
      .addCase(logOut.fulfilled, logOutSuccessReducer)
      .addMatcher(
        isAnyOf(fetchContacts.pending, addContact.pending, logOut.pending),
        fetchContactsPendingReducer
      )
      .addMatcher(isAnyOf(...getActions('fulfilled')), anySuccessReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectReducer as any),
});

export const contactsReducer = contactsSlice.reducer;
