import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from "./features/recipeSlice";
export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
  },
});
