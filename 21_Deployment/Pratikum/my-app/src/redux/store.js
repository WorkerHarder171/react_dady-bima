import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

export default configureStore({
  reducer: {
    list: productSlice,
  },
});
