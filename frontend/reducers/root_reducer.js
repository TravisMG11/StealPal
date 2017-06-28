import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurant_reducer';
import FiltersReducer from './filters_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer,
  filters: FiltersReducer,
  searchTerm: SearchReducer
});

export default RootReducer;
