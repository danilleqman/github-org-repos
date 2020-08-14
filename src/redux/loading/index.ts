import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loader: false,
    error: false,
  },
  reducers: {
    showLoader(state) {
      state.loader = true;
    },
    hideLoader(state) {
      state.loader = false;
    },
    setError(state) {
      state.error = true;
    },
    noError(state) {
      state.error = false;
    },
  },
});

export const {
  hideLoader,
  showLoader,
  setError,
  noError,
} = loaderSlice.actions;

export default loaderSlice.reducer;
