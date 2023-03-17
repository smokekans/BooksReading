import { createSlice } from '@reduxjs/toolkit';
import { addBook, fetchAllBooks } from './bookOperations';

const bookInitialState = {
  book: {
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [
      {
        title: 'The Book of Five Rings',
        author: 'Miyamoto Musashi',
        publishYear: 1643,
        totalPages: 110,
      },
    ],
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
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.book.goingToRead.push(action.payload.newBook);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const bookReducer = bookSlice.reducer;
