import React from "react";
import { connect } from "react-redux";
import { deleteMeal, reserveMeal } from "../../actions/meal_actions";
import RestaurantItem from "./restaurant_item";


// const mapStateToProps = state => {
//     debugger
//     return{// currentUser: state.currentUser,
//     restaurant: state.restaurant
//   };
// }

const mapDispatchToProps = dispatch => {
  return {
    // createMeal: (meal) => dispatch(createMeal(meal)),
    // showMeals: () => dispatch(showMeals()),
    reserveMeal: (meal) => dispatch(reserveMeal(meal)),
    // deleteMeal: (meal) => dispatch(deleteMeal(meal))
  };
}

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(RestaurantItem);
