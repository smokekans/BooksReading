import { createSlice } from '@reduxjs/toolkit';

const planningInitialState = {};

const planningSlice = createSlice({
  name: 'planning',
  initialState: planningInitialState,
  extraReducers: {},
});

export const planningReducer = planningSlice.reducer;
