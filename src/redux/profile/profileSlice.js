import { createSlice } from '@reduxjs/toolkit';

const PROFILE = 'app/redux/profile/profileSlice';

const initialState = {
  userId: 3,
};

const profileSlice = createSlice({
  name: PROFILE,
  initialState,
  reducers: {
    userProfile(state, action) {
      return { ...state, userId: action.payload };
    },
  },
});

export const { userProfile } = profileSlice.actions;
export default profileSlice.reducer;
