import merge from "lodash/merge";
import {RECEIVE_MEALS, RECEIVE_MEAL, REMOVE_MEAL} from "../actions/meal_actions";

const defaultState = {}

const MealReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_MEALS: {
      let newState = action.meals;
      return newState;
    }
    case RECEIVE_MEAL: {
      // const meal = action.meal;
      // const newState = merge({}, state, {meal});
      // return newState;
      return action.meal
    }
    case REMOVE_MEAL: {
      const newState = {};
      return newState;
    }
    // case RESERVE_MEAL: {
    //   const newState = merge({}, state, {})
    //   // user = currentUser
    //   // mealSize =
    //   // mealsLeft = limit - 1
    //   // change limit
    // }
    default:
      return state;
  }
};

export default MealReducer;
