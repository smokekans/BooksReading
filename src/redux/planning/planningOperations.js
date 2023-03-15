import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from 'redux/auth/token';
// import { refreshThunk } from 'redux/auth/authOperations';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const addTrainingConfig = createAsyncThunk(
    'planning/addTrainingConfig',
    async ({ start, end, books }) => {
      try {
        const response = await axios.post('/planning', { start, end, books });
        return response.data;
      } catch (error) {
       console.log(error);
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
      console.log(data)
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);





