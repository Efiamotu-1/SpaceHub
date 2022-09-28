/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => axios.get('https://api.spacexdata.com/v3/rockets')
  .then((response) => {
    const newRocket = response.data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      reserved: false,
    }));
    return newRocket;
  }));

const reducerRockets = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const newRocketList = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });

      state.rockets = newRocketList;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
      state.error = '';
    });

    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.loading = false;
      state.rockets = [];
      state.error = action.error.message;
    });
  },
});

export const { bookRocket } = reducerRockets.actions;
export default reducerRockets.reducer;
