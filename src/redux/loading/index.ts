import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loader: false,
  },
  reducers: {
    showLoader(state: any) {
      state.loader = true;
    },
    hideLoader(state: any) {
      state.loader = false;
    },
  },
});

export const { hideLoader, showLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
