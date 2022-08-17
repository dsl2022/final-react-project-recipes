import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
const initialState = data;

export const recipeSlice = createSlice({
  name: "reciple",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
      return state;
    },
    deleteRecipe: (state) => {
      //TODO add delete items
      console.log("delete reciple");
      return state;
    },
    updateRecipe: (state, action) => {
      //TODO add update items
      console.log("update reciple");
      return state;
    },
    deleteAllRecipes: (state, action) => {
      //TODO add delete all items
      console.log("delete all reciple");
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRecipe, deleteRecipe, updateRecipe, deleteAllRecipes } =
  recipeSlice.actions;

export default recipeSlice.reducer;
