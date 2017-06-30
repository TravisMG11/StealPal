import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurant_reducer';
import FiltersReducer from './filters_reducer';
import SearchReducer from './search_reducer';
import MealReducer from './meal_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
  filters: FiltersReducer,
  searchTerm: SearchReducer,
  meal: MealReducer
});

export default RootReducer;
