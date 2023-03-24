import { createSlice } from '@reduxjs/toolkit';
import { addPages, addTrainingConfig } from './planningOperations';

const planningInitialState = {
  startDate: '',
  endDate: '',
  books: [],
  stats: [],
  filter: [],
};

const planningSlice = createSlice({
  name: 'planning',
  initialState: planningInitialState,
  reducers: {
    addStartDate(state, { payload }) {
      state.startDate = payload;
    },
    addEndDate(state, { payload }) {
      state.endDate = payload;
    },
    addToBooks(state, { payload }) {
      state.books.push(payload);
    },
    filteredBooksList(state, { payload }) {
      state.filter.push(payload);
    },
    deleteBook(state, { payload }) {
      state.filter = payload;
    },
    updateStats(state, { payload }) {
      state.stats = [];
    },
    deleteBooks(state, { payload }) {
      state.books = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addTrainingConfig.fulfilled, (state, { payload }) => {
        state.startDate = payload.startDate;
        state.endDate = payload.endDate;
        state.stats = payload.stats;
      })
      .addCase(addPages.fulfilled, (state, { payload }) => {
        state.stats = payload.planning.stats;
        state.filter = state.filter.map(book =>
          book._id === payload.book._id ? payload.book : book
        );
      });
  },
});

export const planningReducer = planningSlice.reducer;
export const {
  addStartDate,
  addEndDate,
  addToBooks,
  filteredBooksList,
  deleteBook,
  updateStats,
  deleteBooks,
} = planningSlice.actions;
