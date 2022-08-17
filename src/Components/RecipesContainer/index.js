import * as React from "react";
import RecipeReviewCard from "./Card";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { useContext } from "react";
import SearchContext from "../../Context/SearchContext";
import Grid from "@mui/material/Grid";
export default function RecipeContainer() {
  const { search } = useContext(SearchContext);
  let recipes = useSelector((state) => state.recipes);
  if (search) {
    recipes = recipes.filter((recipe) => recipe.title.includes(search));
  }
  const RecipeCards = recipes.map((recipe, index) => {
    return (
      <Grid key={index} item xs={4}>
        <RecipeReviewCard recipe={recipe} key={index} />
      </Grid>
    );
  });
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {RecipeCards}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
