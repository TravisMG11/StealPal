import React from "react";
import { connect } from "react-redux";
import { showMeals, deleteMeal, createMeal, reserveMeal } from "../../actions/meal_actions";
import { values } from "lodash";
import MealItem from "./meal_item";


const mapStateToProps = state => ({
    // currentUser: state.currentUser,
    meal: state.meal
});

const mapDispatchToProps = dispatch => {
  return {
    // createMeal: (meal) => dispatch(createMeal(meal)),
    // showMeals: () => dispatch(showMeals()),
    reserveMeal: (meal) => dispatch(reserveMeal(meal)),
    deleteMeal: (meal) => dispatch(deleteMeal(meal))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealItem);
