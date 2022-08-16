import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
const initialState = [];

export const recipeSlice = createSlice({
  name: "reciple",
  initialState,
  reducers: {
    addRecipe: (state) => {
      console.log("add reciple");
      return state;
    },
    deleteRecipe: (state) => {
      console.log("delete reciple");
      return state;
    },
    updateRecipe: (state, action) => {
      console.log("update reciple");
      return state;
    },
    deleteAllRecipes: (state, action) => {
      console.log("delete all reciple");
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRecipe, deleteRecipe, updateRecipe, deleteAllRecipes } =
  recipeSlice.actions;

export default recipeSlice.reducer;
