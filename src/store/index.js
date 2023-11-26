import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import visitorSlice from './features/dataSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    visitor: visitorSlice,

  },
});

export default store;
