import { createSlice } from '@reduxjs/toolkit';

const languageInitialState = 'en';

const languageSlice = createSlice({
  name: 'language',
  initialState: languageInitialState,

  reducers: {
    changeLang({ payload }) {
      return payload;
    },
  },
});

export const { changeLang } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
