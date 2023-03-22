import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./Reducers/StudentReducer";

const store = configureStore({
  reducer: {
    student: StudentSlice.reducer,
  },
  devTools: true,
});

export default store;
