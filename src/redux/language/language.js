import { createSlice } from '@reduxjs/toolkit';

const languageInitialState = {};

const languageSlice = createSlice({
  name: 'language',
  initialState: languageInitialState,
  extraReducers: {},
});

export const languageReducer = languageSlice.reducer;
