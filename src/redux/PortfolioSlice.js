import { createSlice } from "@reduxjs/toolkit";

const PortfolioSlice = createSlice({
  name: "toggle",
  initialState: {
    lightMode: false,
  },
  reducers: {
    // definera action
    setLightMode: (state) => {
      state.lightMode = !state.lightMode;
    },
  },
});
export const { setLightMode } = PortfolioSlice.actions;
export default PortfolioSlice.reducer;
