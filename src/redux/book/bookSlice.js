import { createSlice } from '@reduxjs/toolkit';

const bookInitialState = {};

const bookSlice = createSlice({
  name: 'book',
  initialState: bookInitialState,

  extraReducers: {},
});

export const bookReducer = bookSlice.reducer;
