import merge from "lodash/merge";
import {RECEIVE_MEALS, RECEIVE_MEAL, REMOVE_MEAL} from "../actions/meal_actions";

const defaultState = {};

const MealReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_MEALS: {
      let newState = action.meals;
      return newState;
    }
    case RECEIVE_MEAL: {
      return action.meal;
    }
    case REMOVE_MEAL: {
      const newState = {};
      return newState;
    }
    default:
      return state;
  }
};

export default MealReducer;
