import React from 'react';
import FilterForm from './filter_form';
import RestaurantsIndex from '../restaurants/restaurants_index';
import RestaurantIndexContainer from '../restaurants/restaurant_index_container';
import RestaurantMap from '../map/restaurant_map';

const RestaurantSearch = ({ restaurants, updateFilter }) => (
  <div className="map-stuff">
    <RestaurantIndexContainer />
    <RestaurantMap restaurants={restaurants}/>
  </div>
)

export default RestaurantSearch;
