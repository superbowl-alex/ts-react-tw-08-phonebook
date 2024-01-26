import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Contact, Data } from './contactsSlice';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Contact[]>('/contacts');
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (values: Data, thunkAPI) => {
    try {
      const { name, number } = values;
      const response = await axios.post<Contact>('/contacts', {
        name: name,
        number: number,
      });
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId: string, thunkAPI) => {
    try {
      const response = await axios.delete<Contact>(`/contacts/${contactId}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
