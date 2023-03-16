import { createSlice } from '@reduxjs/toolkit';
import { addPages, addTrainingConfig } from './planningOperations';
// import { getTrainingData } from './planningOperations';
// import { addTrainingConfig
//  fetchTraining
//  } from './planningOperations';

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
  },
  extraReducers: builder => {
    builder
      // .addCase(getTrainingData.fulfilled, (state, { payload }) => {
      //   state.startDate = payload.startDate;
      //   state.endDate = payload.endDate;
      //   state.books = payload.books;

      // } )

      // .addCase(addTrainingConfig.rejected, handleRejected)
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
    // .addCase(fetchTraining.fulfilled, (state, action) => {
    //   console.log(action.payload);
    // })
  },
});

export const planningReducer = planningSlice.reducer;
export const { addStartDate, addEndDate, addToBooks, filteredBooksList } =
  planningSlice.actions;
