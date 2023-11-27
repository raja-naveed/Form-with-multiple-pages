import { configureStore } from '@reduxjs/toolkit';
import locationSlice from './features/locationSlice';
import formSlice from './features/formSlice';

const store = configureStore({
  reducer: {
    location: locationSlice,
    form: formSlice,


  },
});

export default store;
