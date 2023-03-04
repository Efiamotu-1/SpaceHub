import { createSlice } from '@reduxjs/toolkit';
import ApiGetAllMissions from './apiCalls';

const initialState = [];

const reducerMission = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    getMissionsAPI: (state, action) => {
      const tmpArray = Object.keys(action.payload).map((id) => ({
        id: action.payload[id].mission_id,
        mission_name: action.payload[id].mission_name,
        description: action.payload[id].description,
        missionId: action.payload[id].mission_id,
        reserved: false,
      }));
      [...state] = [...tmpArray];
      return state;
    },
    toggleReservation: (state, action) => {
      const id = action.payload;
      const newState = state.map((mission) => {
        if (mission.id === id) { mission.reserved = !mission.reserved; }
        return { ...mission };
      });
      [...state] = [...newState];
    },
  },
});

export const { getMissionsAPI, toggleReservation } = reducerMission.actions;

const asyncMissionsFromAPI = () => async (dispatch) => {
  const response = await ApiGetAllMissions();
  dispatch(getMissionsAPI(response));
};

export { asyncMissionsFromAPI };
export default reducerMission.reducer;
