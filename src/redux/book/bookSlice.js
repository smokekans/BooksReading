import { createSlice } from '@reduxjs/toolkit';
import { addBook, addBookReview, fetchAllBooks } from './bookOperations';

const bookInitialState = {
  book: {
    goingToRead: null,
    currentlyReading: null,
    finishedReading: null,
    isLoading: false,
    error: null,
    // raiting: null,
    // feedback: '',
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
      })
      .addCase(addBookReview.fulfilled, (state, action) => {
        state.book.finishedReading = state.book.finishedReading.map(book =>
          book._id === action.payload._id ? action.payload : book
        );
      });
  },
});

export const bookReducer = bookSlice.reducer;
