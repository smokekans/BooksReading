import { createAction, createSlice } from '@reduxjs/toolkit';
import { signInThunk, logOutThunk, signUpThunk, getUserThunk } from './authOperations';

const authInitialState = {
  user: {},
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

function signUpFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function signInFulfilled(state, { payload }) {
  state.user = payload.userData;
  state.token = payload.accessToken;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
}

function logOutFulfilled(state) {
  state.isLoading = false;
  state.isLoggedIn = false;
  state.user = {};
  state.token = null;
}

function getUserFulfilled(state, { payload }) {
  state.user = payload;
  state.isLoading = false;
  state.isLoggedIn = true;
  state.error = null;
}

export const addAccessToken = createAction('auth/addtoken');

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpThunk.fulfilled, signUpFulfilled)
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(signInThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInThunk.fulfilled, signInFulfilled)
      .addCase(signInThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserThunk.fulfilled, getUserFulfilled)
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, logOutFulfilled)
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addAccessToken, (state, { payload }) => {
      state.token = payload;
    },)
  },
});

export const authReducer = authSlice.reducer;
