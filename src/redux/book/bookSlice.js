import { createSlice } from '@reduxjs/toolkit';
import { getUserThunk } from 'redux/auth/authOperations';
import { addBook, addBookReview, deleteBook } from './bookOperations';

const bookInitialState = {
  book: {
    goingToRead: null,
    currentlyReading: null,
    finishedReading: null,
    isLoading: false,
    error: null,
    rating: null,
    feedback: '',
    idR: '',
  },
};

const bookSlice = createSlice({
  name: 'book',
  initialState: bookInitialState,

  reducers: {
    addIdReview(state, { payload }) {
      state.book.idR = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(addBook.pending, state => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.book.goingToRead.push(payload);
      })
      .addCase(addBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.book.goingToRead = payload.goingToRead;
        state.book.currentlyReading = payload.currentlyReading;
        state.book.finishedReading = payload.finishedReading;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteBook.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.book.goingToRead = state.book.goingToRead.filter(
          ({ _id }) => _id !== payload._id
        );
      })
      .addCase(deleteBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addBookReview.fulfilled, (state, action) => {
        state.book.finishedReading = state.book.finishedReading.map(book =>
          book._id === action.payload._id ? action.payload : book
        );
        state.book.rating = action.payload.rating;
        state.book.idR = action.payload._id;
      });
  },
});

export const bookReducer = bookSlice.reducer;
export const { addIdReview } = bookSlice.actions;
