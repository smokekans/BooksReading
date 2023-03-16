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
  pagesFinished: null,
  pagesTotal: null,
};
// const handleRejected = (state, action) => {

//   state.planningInitialState.error = action.payload;
// };

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
  },
  extraReducers: builder => {
    builder
      // .addCase(getTrainingData.fulfilled, (state, { payload }) => {
      //   state.startDate = payload.startDate;
      //   state.endDate = payload.endDate;
      //   state.books = payload.books;

      // } )

      // .addCase(addTrainingConfig.rejected, handleRejected)
      .addCase(addTrainingConfig.fulfilled, (planningInitialState, action) => {
        console.log(planningInitialState);
        console.log(action);
      })
      .addCase(addPages.fulfilled, (state, action) => {
        state.stats = action.payload.planning.stats;
        state.pagesFinished = action.payload.book.pagesFinished;
        state.pagesTotal = action.payload.book.pagesTotal;
      });
    // .addCase(fetchTraining.fulfilled, (state, action) => {
    //   console.log(action.payload);
    // })
  },
});

export const planningReducer = planningSlice.reducer;
export const { addStartDate, addEndDate, addToBooks } = planningSlice.actions;
