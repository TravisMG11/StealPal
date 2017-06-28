import { RECEIVE_SEARCH_RESTAURANTS } from '../actions/restaurant_actions';

const SearchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESTAURANTS:{
      const newState = action.restaurants;
      return newState;
    }
    default:
      return state;
  }
};

// const RestaurantReducer = (state = {}, action) => {
//   switch(action.type) {
//     case RECEIVE_RESTAURANTS: {
//       const newState = action.restaurants;
//       return newState;
//     }
//     case RECEIVE_RESTAURANT: {
//       const newRestaurant = {[action.restaurant.id]: action.restaurant};
//       const newState = merge({}, state, newPost);
//       return newState;
//     }
//     case REMOVE_RESTAURANT: {
//       const newState = merge({}, state);
//       delete newState[action.restaurant.id];
//       return newState;
//     }
//     default:
//       return state;
//   }
// };
//
// export default RestaurantReducer;
export default SearchReducer;
