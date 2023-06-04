import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profile/profileSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export default store;
