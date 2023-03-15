import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../auth/token';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const addBook = createAsyncThunk(
  'book/addBook',
  async (newBook, thunkAPI) => {
    try {
     const value = thunkAPI.getState().auth.token
      token.set(value)
      const { data } = await axios.post('/book', newBook);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchBooks = createAsyncThunk(
//     'books/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get('/user/books')
//             return response.data;
//         } catch (error) { return thunkAPI.rejectWithValue(error.message) }
//     }
// );

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAll',
  async (_, thunkAPI) => {
    try {
      const value = thunkAPI.getState().auth.token
      token.set(value)
      // const state = thunkAPI.getState();
      // const persistedToken = token;

      // if (persistedToken === null) {
      //   return thunkAPI.rejectWithValue();
      // }

      // token.set(persistedToken);
      const { data } = await axios.get('/user/books');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


// const postApiBook = axios.create({
//     baseURL: 'https://bookread-backend.goit.global',
//     method: 'post',
// })
// export const addBook = createAsyncThunk(
//     'book/addBook',
//     async (newBook, thunkAPI) => {
//         try {
//             const response = await postApiBook.post('book', newBook)
//             return response.data;
//         } catch (error){ return thunkAPI.rejectWithValue(error)}
//     }
// )
