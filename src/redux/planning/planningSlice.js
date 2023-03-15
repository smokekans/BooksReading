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
  reducers: {
    addStartDate(state, action) {
      state.startDate = action.payload
    },
    addEndDate(state, action) {
      state.endDate = action.payload
    }
  },
  extraReducers: builder => {
    
  },
});

export const planningReducer = planningSlice.reducer;
export const {addStartDate, addEndDate} = planningSlice.actions;
