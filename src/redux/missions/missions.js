import { createSlice } from '@reduxjs/toolkit';
import ApiGetAllMissions from './apiCalls';

const initialState = [];

const reducerMission = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    getMissionsAPI: (state, action) => {
      const tmpArray = Object.keys(action.payload).map((id) => ({
        id: Number(id),
        mission_name: action.payload[id].mission_name,
        description: action.payload[id].description,
        missionId: action.payload[id].mission_id,
      }));
      // eslint-disable-next-line no-param-reassign
      [...state] = [...tmpArray];
      return state;
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
