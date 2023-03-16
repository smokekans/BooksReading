import { createSlice } from '@reduxjs/toolkit';
import { addBook, fetchAllBooks } from './bookOperations';

const bookInitialState = {
  book: {
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
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
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.book.goingToRead = action.payload.goingToRead;
        state.book.currentlyReading = action.payload.currentlyReading;
        state.book.currentlyReading = action.payload.currentlyReading;
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const bookReducer = bookSlice.reducer;
