import * as ApiUtil from '../util/meal_api_util';

export const RECEIVE_MEALS = 'RECEIVE_MEALS';
export const RECEIVE_MEAL = 'RECEIVE_MEAL';
export const REMOVE_MEAL = 'REMOVE_MEAL';
export const RESERVE_MEAL = 'RESERVE_MEAL';



export const receiveMeals = meals => ({
  type: RECEIVE_MEALS,
  meals
});

export const receiveMeal = meal => ({
  type: RECEIVE_MEAL,
  meal
});

export const removeUsermeal = () => ({
  type: REMOVE_MEAL
});

export const reserveMeal = usermeal => dispatch => (
  ApiUtil.reserveMeal(usermeal).then(usermeal => dispatch(receiveMeal(usermeal)))
);

// export const makeReservation = meal => ({
//
// })
export const createRest = meal => dispatch => (
  ApiUtil.addMeal(meal).then(meal => dispatch(receiveMeal(meal)))
);

export function showMeals() {
  return dispatch => {
    return ApiUtil.show_meals().then(meals => dispatch(receiveMeals(meals)));
  };
}

export const deleteMeal = meal => dispatch => (
  ApiUtil.removeUsermeal(meal).then(meal => dispatch(removeUsermeal(meal)))
);
