import React from "react";
import { connect } from "react-redux";
import { showMeals, deleteMeal, createMeal } from "../../actions/meal_actions";
import { values } from "lodash";
import MealsIndex from "./meals_index";

function selectAllMeals(meals) {
  return values(meals);
}

function mapStateToProps({meals}) {
  return {
    meals: selectAllMeals(meals)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createMeal: (meal) => dispatch(createMeal(meal)),
    showMeals: () => dispatch(showMeals()),
    deleteMeal: (meal) => dispatch(deleteMeal(meal))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MealsIndex);
