import * as React from "react";
import RecipeReviewCard from "./Card";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
export default function RecipeContainer() {
  const recipes = useSelector((state) => state.recipes);
  const RecipeCards = recipes.map((recipe, index) => {
    return <RecipeReviewCard key={index} />;
  });
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <Container maxWidth="sm">{RecipeCards}</Container>
    </React.Fragment>
  );
}
