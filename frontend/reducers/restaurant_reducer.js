import merge from "lodash/merge";
import {RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT, REMOVE_RESTAURANT} from "../actions/restaurant_actions";

const RestaurantReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_RESTAURANTS: {
      const newState = action.restaurants;
      return newState;
    }
    case RECEIVE_RESTAURANT: {
      const newRestaurant = {[action.restaurant.id]: action.restaurant};
      const newState = merge({}, state, newRestaurant);
      return newState;
    }
    case REMOVE_RESTAURANT: {
      const newState = merge({}, state);
      delete newState[action.restaurant.id];
      return newState;
    }
    default:
      return state;
  }
};

export default RestaurantReducer;
