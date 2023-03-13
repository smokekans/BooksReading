import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: {},
});

export const userReducer = userSlice.reducer;
