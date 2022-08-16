import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import RecipeContainer from "./Components/RecipeContainer";
import {
  addRecipe,
  deleteRecipe,
  updateRecipe,
  deleteAllRecipes,
} from "./features/recipeSlice";

function App() {
  const recipes = useSelector((state) => state.recipes);
  console.log({ recipes });
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addRecipe());
    dispatch(deleteRecipe());
    dispatch(updateRecipe());
    dispatch(deleteAllRecipes());
  };
  return (
    <div className="App">
      <RecipeContainer />
      <button onClick={handleClick}>test</button>
    </div>
  );
}

export default App;
