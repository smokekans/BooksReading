import { createSlice } from '@reduxjs/toolkit';

const planningInitialState = {
  startDate: "",
  endDate: "",
  books: [],
  pages: 0
};

const planningSlice = createSlice({
  name: 'planning',
  initialState: planningInitialState,
  reducer: {
    addDate(state, action) {
      state.startDate = action.payload
  }
  },
  extraReducers: builder => {
    
  },
});

export const planningReducer = planningSlice.reducer;
export const {addDate} = planningSlice.reducer;
