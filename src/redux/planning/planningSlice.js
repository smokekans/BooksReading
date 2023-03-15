import { createSlice } from '@reduxjs/toolkit';

const planningInitialState = {
  startDate: "",
  endDate: "",
  books: [],
  pages: 0
};

const planningSlice = createSlice({
  name: 'planning',
  initialState: planningInitialState,
  extraReducers: builder => {
    
  },
});

export const planningReducer = planningSlice.reducer;
