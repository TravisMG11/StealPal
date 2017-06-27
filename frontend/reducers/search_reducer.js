import { RECEIVE_SEARCH_RESTAURANTS } from '../actions/restaurant_actions';

const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESTAURANTS:
      const newState = action.restaurants;
      return newState;
    default:
      return state;
  }
};

export default SearchReducer;
