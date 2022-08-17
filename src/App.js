import "./App.css";
import { useState } from "react";
import RecipeContainer from "./Components/RecipesContainer";
import RecipeSearchBar from "./Components/Search";
import SearchContext from "./Context/SearchContext";
import OpenPopUpContext from "./Context/OpenPopUpContext";
import AddNewRecipePopUp from "./Components/utils/PopUpModal";

function App() {
  const [search, setSearch] = useState("");
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <div className="App">
      <OpenPopUpContext.Provider value={{ openAdd, setOpenAdd }}>
        <AddNewRecipePopUp />
        <SearchContext.Provider value={{ search, setSearch }}>
          <RecipeSearchBar />
          <RecipeContainer />
        </SearchContext.Provider>
      </OpenPopUpContext.Provider>
    </div>
  );
}

export default App;
