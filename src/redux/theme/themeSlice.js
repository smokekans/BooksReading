import { createSlice } from '@reduxjs/toolkit';

const themeInitialState = {};

const themeSlice = createSlice({
  name: 'theme',
  initialState: themeInitialState,
  extraReducers: {},
});

export const themeReducer = themeSlice.reducer;
