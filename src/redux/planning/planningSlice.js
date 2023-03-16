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
    addStartDate(state, action) {
      state.startDate = action.payload;
    },
    addEndDate(state, action) {
      state.endDate = action.payload;
    },
    addToBooks(state, action) {
      state.books.push(action.payload);
    },
    filteredBooksList(state, action) {
      state.filter.push(action.payload);
    },
    deleteBook(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addTrainingConfig.fulfilled, (state, action) => {
        state.startDate = action.payload.startDate;
        state.endDate = action.payload.endDate;
        state.stats = action.payload.stats;
      })
      .addCase(addPages.fulfilled, (state, action) => {
        state.stats = action.payload.planning.stats;
        state.filter = state.filter.map(book =>
          book._id === action.payload.book._id ? action.payload.book : book
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
} = planningSlice.actions;
