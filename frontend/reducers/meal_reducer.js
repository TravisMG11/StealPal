import merge from "lodash/merge";
import {RECEIVE_MEALS, RECEIVE_MEAL, REMOVE_MEAL} from "../actions/meal_actions";

const MealReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_MEALS: {
      let newState = action.meals;
      return newState;
    }
    case RECEIVE_MEAL: {
      const newMeal = {[action.meal.id]: action.meal};
      const newState = merge({}, state, newPost);
      return newState;
    }
    case REMOVE_MEAL: {
      const newState = merge({}, state);
      delete newState[action.meal.id];
      return newState;
    }
    default:
      return state;
  }
};

export default MealReducer;
