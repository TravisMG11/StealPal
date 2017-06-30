import React from 'react';
import FilterForm from './filter_form';
import RestaurantsIndex from '../restaurants/restaurants_index';
import RestaurantIndexContainer from '../restaurants/restaurant_index_container';
import RestaurantItemContainer from '../restaurants/restaurant_item_container';
import RestaurantMap from '../map/restaurant_map';
import SearchBarContainer from './search_bar_container';
import MealContainer from '../meals/meal_container';
import MealReservedContainer from '../meals/meal_reserved_container';

const RestaurantSearch = ({ restaurants, updateFilter }) => {
  return (
    <div className="find-stuff">
      <MealReservedContainer />
      <SearchBarContainer />
      <RestaurantIndexContainer />
      <RestaurantMap restaurants={restaurants} updateFilter={updateFilter}/>
    </div>

  )
}

export default RestaurantSearch;
