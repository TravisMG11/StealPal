import React from "react";
import { connect } from "react-redux";
import { deleteMeal } from "../../actions/meal_actions";
import { values } from "lodash";
import MealReserved from "./meal_reserved";


const mapStateToProps = state => ({
    meal: state.meal
});

const mapDispatchToProps = dispatch => {
  return {
    deleteMeal: (usermeal) => dispatch(deleteMeal(usermeal))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealReserved);
