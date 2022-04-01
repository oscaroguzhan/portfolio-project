import { configureStore } from "@reduxjs/toolkit";
import PortfolioSlice from "../redux/PortfolioSlice";

const store = configureStore({
  reducer: {
    toggle: PortfolioSlice,
  },
});
export default store;
