

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
     "https://63e38ec7619fce55d41bbe63.mockapi.io/contacts"
    //  "https://63e26634ad0093bf29cf1bbc.mockapi.io/contacts/"
  // 'https://63e26634ad0093bf29cf1bbc.mockapi.io/contacts/';
  // 'https://63b2ef525901da0ab37274b0.mockapi.io/contacts/';
  // 'https://63e26634ad0093bf29cf1bbc.mockapi.io/contacts/';
  // https://63e26634ad0093bf29cf1bbc.mockapi.io/contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contacts);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);