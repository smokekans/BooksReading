import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchAllBooks } from 'redux/book/bookOperations';
import { token } from './token';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('auth/register', credentials);
      dispatch(
        signInThunk({
          email: credentials.email,
          password: credentials.password,
        })
      );
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const googleSignUpThunk = createAsyncThunk(
  'auth/google',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('auth/google');
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      token.set(data.accessToken);
      dispatch(fetchAllBooks());
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/signout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      token.set(value);
      await axios.post(`auth/logout`);
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'user/refresh',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('user/', credentials);
      token.set(data.data.user.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
