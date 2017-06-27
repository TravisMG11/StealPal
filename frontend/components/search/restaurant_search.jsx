import React from 'react';
import FilterForm from './filter_form';
import RestaurantsIndex from '../restaurants/restaurants_index';
import RestaurantIndexContainer from '../restaurants/restaurant_index_container';
import RestaurantMap from '../map/restaurant_map';

const RestaurantSearch = ({ restaurants, updateFilter }) => {
  return (
    <div className="map-stuff">
      <RestaurantIndexContainer />
      <RestaurantMap restaurants={restaurants} updateFilter={updateFilter}/>
    </div>

  )
}

export default RestaurantSearch;
