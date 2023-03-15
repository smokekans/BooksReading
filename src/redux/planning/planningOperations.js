import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { refreshThunk } from 'redux/auth/authOperations';

axios.defaults.baseURL = 'https://bookread-backend.goit.global'

// export const fetchTraining = createAsyncThunk(
//   'planning/fetchTraining',
//   async () => {
//     try {
//       await refreshThunk()
//         const response = await axios.get('/planning');
//       return response.data;
//     } catch (error) {
//        console.log(error);
//     }
//   }
// );

export const addTrainingConfig = createAsyncThunk(
  'planning/addTrainingConfig',
  async ({startDate, endDate, books}) => {
    try {
      const response = await axios.post('/planning', {startDate, endDate, books});
      return response.data;
    } catch (error) {
     console.log(error);
    }
  }
);
