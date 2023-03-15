import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/auth/token';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

// export const addTrainingConfig = createAsyncThunk(
//   'planning/addTrainingConfig',
//   async ({ start, end }) => {
//     try {
//       const response = await axios.post('/planning', { start, end  });
//       return response.data;
//     } catch (error) {
//      console.log(error);
//     }
//   }
// );








































// export const getTrainingData = createAsyncThunk(
//   'planning/getTrainingConfig',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/planning');
//     //   token.set(data.token);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );


