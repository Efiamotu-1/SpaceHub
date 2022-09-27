import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const reducerRockets = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addRocket: (state) => state,
  },
});

export const { addRocket } = reducerRockets.actions;
export default reducerRockets.reducer;
