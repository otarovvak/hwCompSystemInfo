import { configureStore } from "@reduxjs/toolkit";
import InfoSlicer from "../feature/InfoSlicer";
export const store = configureStore({
  reducer: {
    info: InfoSlicer,
  },
});
