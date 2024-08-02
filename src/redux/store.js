import { configureStore } from "@reduxjs/toolkit";
import covidReucer from "./covidSlice";

export default configureStore({
  reducer: covidReucer,
});
