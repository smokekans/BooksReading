import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/auth/token';
// import { refreshThunk } from 'redux/auth/authOperations';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const addTrainingConfig = createAsyncThunk(
  'planning/addTrainingConfig',
  async ({ startDate, endDate, books }, thunkAPI) => {
    try {
      const value = thunkAPI.getState().auth.token;
      token.set(value);
      const response = await axios.post('/planning', {
        startDate,
        endDate,
        books,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const fetchTraining = createAsyncThunk(
//   'planning/fetchTraining',
//   async () => {

//     try {
//       await refreshThunk()
//         const response = await axios.get('/planning');
//         console.log(response )
//       return response.data;
//     } catch (error) {
//        console.log(error);
//     }
//   }
// );

export const getTrainingData = createAsyncThunk(
  'planning/getTrainingConfig',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/planning');
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPages = createAsyncThunk(
  'planning/addPages',
  async ({ pages }, thunkAPI) => {
    try {
      const value = thunkAPI.getState().auth.token;
      token.set(value);
      const response = await axios.patch('/planning', { pages });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
