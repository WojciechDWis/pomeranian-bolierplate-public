import { createSlice } from '@reduxjs/toolkit';

export const storeTest = createSlice({
  name: 'store-test',
  initialState: {
    userProfile: {
      name: 'Jan',
      profile: 'retail',
    },
  },
  reducers: {
    toggleProfile: (sliceState) => {
      if (sliceState.userProfile.profile === 'retail') {
        sliceState.userProfile.profile = 'business';
      } else {
        sliceState.userProfile.profile = 'retail';
      }
    },
  },
});

export const selectProfile = (state) => state?.testSlice?.userProfile?.profile;

export const { toggleProfile } = storeTest.actions;
