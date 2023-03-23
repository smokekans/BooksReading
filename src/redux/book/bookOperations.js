import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../auth/token';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const addBook = createAsyncThunk(
  'book/addBook',
  async (goingToRead, thunkAPI) => {
    try {
      const value = thunkAPI.getState().auth.token;
      token.set(value);
      const { data } = await axios.post('/book', goingToRead);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      if (value === null) {
        return rejectWithValue('Unable to fetch user');
      }
      token.set(value);
      const { data } = await axios.get('/user/books');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId, { rejectWithValue, getState }) => {
    try {
      const value = getState().auth.token;
      if (value === null) {
        return rejectWithValue('Unable to delete book');
      }
      token.set(value);
      const { data } = await axios.delete(`/book/${bookId}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addBookReview = createAsyncThunk(
  'book/addBookReview',
  async ({ bookId, review }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/book/review/${bookId}`, review);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
