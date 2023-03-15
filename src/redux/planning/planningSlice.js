import { createSlice } from '@reduxjs/toolkit';
import { getTrainingData } from './planningOperations';

const planningInitialState = {
  startDate: "",
  endDate: "",
  books: [],
  pages: 0
};

const planningSlice = createSlice({
  name: 'planning',
  initialState: planningInitialState,
  reducers: {
    addStartDate(state, action) {
      state.startDate = action.payload
    },
    addEndDate(state, action) {
      state.endDate = action.payload
    }
  },
  extraReducers: builder => {
    // builder


























    
    // .addCase(getTrainingData.fulfilled, (state, { payload }) => {
    //   state.startDate = payload;
    //   state.endDate = payload;
    // } )
    
       
  },
});

export const planningReducer = planningSlice.reducer;
export const {addStartDate, addEndDate} = planningSlice.actions;
 