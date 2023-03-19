import { createSlice } from '@reduxjs/toolkit';
import { addBook, fetchAllBooks } from './bookOperations';

const bookInitialState = {
  book: {
    goingToRead: null,
    currentlyReading: null,
    finishedReading: null,
    isLoading: false,
    error: null,
  },
};

const bookSlice = createSlice({
  name: 'book',
  initialState: bookInitialState,

  reducers: {},

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
      .addCase(fetchAllBooks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllBooks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.book.goingToRead = payload.goingToRead;
        state.book.currentlyReading = payload.currentlyReading;
        state.book.finishedReading = payload.finishedReading;
      })
      .addCase(fetchAllBooks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const bookReducer = bookSlice.reducer;
