import * as React from "react";
import RecipeReviewCard from "./Card";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
export default function RecipeContainer() {
  const recipes = useSelector((state) => state.recipes);
  const RecipeCards = recipes.map((recipe, index) => {
    return (
      <Grid item xs={4}>
        <RecipeReviewCard recipe={recipe} key={index} />
      </Grid>
    );
  });
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {RecipeCards}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
