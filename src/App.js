import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addRecipe,
  deleteRecipe,
  updateRecipe,
  deleteAllRecipes,
} from "./counterSlice";

function App() {
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  return <div className="App"></div>;
}

export default App;
