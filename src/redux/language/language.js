// import { createSlice } from '@reduxjs/toolkit';

// const languageInitialState = {};

// const languageSlice = createSlice({
//   name: 'language',
//   initialState: languageInitialState,
//   extraReducers: {},
// });

// export const languageReducer = languageSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const languageInitialState = "en";

const languageSlice = createSlice({
  name: 'language',
  initialState: languageInitialState,

  reducers: {
    changeLang(state, { payload }) {
      return payload;
    }
  }

  // extraReducers: {},
});

export const { changeLang } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;