import * as ApiUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';



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

export const createRestaurant = restaurant => dispatch => (
  ApiUtil.createRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant)))
);

export function showRestaurants() {
  return dispatch => {
    return ApiUtil.showRestaurants().then(restaurants => dispatch(receiveRestaurants(restaurants)));
  };
}

export const deleteRestaurant = restaurant => dispatch => (
  ApiUtil.deleteRestau(restaurant).then(restaurant => dispatch(removeRestaurant(restaurant)))
);
