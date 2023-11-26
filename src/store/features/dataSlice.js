import { fetchAddress, getUserLocation } from "@/components/lib/helper";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Define the initial state
const initialState = {
  visitor: null,
  loading: false,
  error: null,
};

// Define the async thunk to fetch visitor data
export const fetchVisitorData = createAsyncThunk(
  "visitor/fetchVisitorData",
  async () => {
    try {
      const location = await getUserLocation();
      const visitor = await fetchAddress(location.latitude, location.longitude);
      return visitor;
    } catch (e) {
      if (e.message === "User denied Geolocation") {
        const visitor = await fetchAddress();
        return visitor;
      }
      throw e;
    }
  }
);

// Define the visitor slice
const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchVisitorData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchVisitorData.fulfilled]: (state, action) => {
      state.visitor = action.payload;
    },
    [fetchVisitorData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { /* Any synchronous actions */ } = visitorSlice.actions;
export default visitorSlice.reducer;