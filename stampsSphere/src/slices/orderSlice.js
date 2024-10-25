// redux/orderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStatus: JSON.parse(localStorage.getItem('currentStatus')) || 'sold',
  previousStatus: JSON.parse(localStorage.getItem('previousStatus')) || null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.previousStatus = state.currentStatus; // Set previous status to the current one
      state.currentStatus = action.payload; // Update current status
      localStorage.setItem('currentStatus', JSON.stringify(state.currentStatus));
      localStorage.setItem('previousStatus', JSON.stringify(state.previousStatus));
    },
    resetStatus: (state) => {
      state.previousStatus = null;
      state.currentStatus = 'sold';
      localStorage.setItem('currentStatus', JSON.stringify(state.currentStatus));
      localStorage.setItem('previousStatus', JSON.stringify(state.previousStatus));
    },
  },
});

export const { updateStatus, resetStatus } = orderSlice.actions;
export default orderSlice.reducer;
