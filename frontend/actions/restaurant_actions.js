import * as ApiUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';

export const RECEIVE_SEARCH_RESTAURANTS = 'RECEIVE_SEARCH_RESTAURANTS';
export const REQUEST_SEARCH_RESTAURANTS = 'REQUEST_SEARCH_RESTAURANTS';


export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});

export const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const removeRestaurant = restaurant => ({
  type: REMOVE_RESTAURANT,
  restaurant
});

export const receiveSearchRestaurants = restaurants => {
  return {
    type: RECEIVE_SEARCH_RESTAURANTS,
    restaurants
  };
};

export const fetchSearchRestaurants = searchTerm => dispatch => (
  ApiUtil.fetchSearchRestaurants(searchTerm).then(restaurants => dispatch(receiveSearchRestaurants(restaurants.data)))
);

export const createRestaurant = restaurant => dispatch => (
  ApiUtil.addRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant)))
);

// export function showRestaurants() {
//   return dispatch => {
//     return ApiUtil.show_restaurants().then(restaurants => dispatch(receiveRestaurants(restaurants)));
//   };
// }

export const showRestaurants = filters => dispatch => (
  ApiUtil.show_restaurants(filters).then(restaurants => (dispatch(receiveRestaurants(restaurants))))
);

export const deleteRestaurant = restaurant => dispatch => (
  ApiUtil.removeRestaurant(restaurant).then(restaurant => dispatch(removeRestaurant(restaurant)))
);
