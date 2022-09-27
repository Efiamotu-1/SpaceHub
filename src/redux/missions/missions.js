import { createSlice } from '@reduxjs/toolkit';
import ApiGetAllMissions from './apiCalls';

const initialState = [];

const reducerMission = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    getMissionsAPI: (state, action) => {
      console.log('AA');
      // const tmpArray = [];
      // const a = [...tmpArray, action.payload];
      return [...state, action.payload];
    },
  },
});

export const { getMissionsAPI } = reducerMission.actions;

const asyncMissionsFromAPI = () => async (dispatch) => {
  const response = await ApiGetAllMissions();
  dispatch(getMissionsAPI(response));
};

export { asyncMissionsFromAPI };
export default reducerMission.reducer;
