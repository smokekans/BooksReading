import { createSlice } from '@reduxjs/toolkit';
import { getTrainingData } from './planningOperations';
import { addTrainingConfig, fetchTraining } from './planningOperations';




const planningInitialState = {
  startDate: "",
  endDate: "",
  books: [],
};
// const handleRejected = (state, action) => {
 
//   state.planningInitialState.error = action.payload;
// };

const planningSlice = createSlice({
  name: 'planning',
  initialState: planningInitialState,
  reducers: {
    addStartDate(state, action) {
      state.startDate = action.payload
    },
    addEndDate(state, action) {
      state.endDate = action.payload
    },
    addToBooks(state, action) {
      state.books.push(action.payload)
    }
  },
  extraReducers: builder => {
    // builder


    
    // .addCase(getTrainingData.fulfilled, (state, { payload }) => {
    //   state.startDate = payload;
    //   state.endDate = payload;
    // } )
    
       
    builder
      // .addCase(addTrainingConfig.rejected, handleRejected)
      .addCase(addTrainingConfig.fulfilled, (state, action) => {
        console.log('success');
      })
      // .addCase(fetchTraining.fulfilled, (state, action) => {
      //   console.log(action.payload);
      // })
  },
});

export const planningReducer = planningSlice.reducer;
export const {addStartDate, addEndDate, addToBooks} = planningSlice.actions;
