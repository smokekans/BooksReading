import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const addBook = createAsyncThunk(
  'book/addBook',
  async (newBook, thunkAPI) => {
    try {
      const { data } = await axios.post('/book', newBook);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
