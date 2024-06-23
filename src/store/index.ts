import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./reducers/categories";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
