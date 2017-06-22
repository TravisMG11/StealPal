import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantReducer from './restaurant_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  restaurants: RestaurantReducer
});

export default RootReducer;
