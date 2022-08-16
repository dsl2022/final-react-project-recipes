import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./features/recipeSlice";
export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
