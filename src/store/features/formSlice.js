// formSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formValues: {
    email: '',
    confirmEmail: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phoneNumber: '',
    city: '',
    nic: '',
    address1: '',
    address2: '',
    state: '',
    zipCode: '',
    countrycode: '',
    qualifications: '',
    yearOfCompletion: '',
    university: '',
    experience: '',
    employement: '',
  },
  // Add other initial state properties as needed
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setSection(state, action) {
      state.section = action.payload;
    },
    setFlagUrl(state, action) {
      state.flagUrl = action.payload;
    },
    setFormValues(state, action) {
      state.formValues = action.payload;
    },
    // ... other reducers
  },
});

export const { setFormValues } = formSlice.actions;
export default formSlice.reducer;
