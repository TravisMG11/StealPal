import React from "react";
import { connect } from "react-redux";
import { showRestaurants, deleteRestaurant, createRestaurant } from "../../actions/restaurant_actions";
import { values } from "lodash";
import RestaurantsIndex from "./restaurants_index";
import { asArray } from '../../reducers/selector';
import { searchRestaurants, filterBySize, filterByType } from '../../reducers/selector';

function mapStateToProps(state) {
  const nameSearchResults = searchRestaurants(values(state.restaurants), state.searchTerm);
  const sizeSearchResults = filterBySize(nameSearchResults, state.searchSize);
  const typeSearchResults = filterByType(sizeSearchResults, state.searchType);



  return {
    restaurants: nameSearchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
    // showRestaurants: () => dispatch(showRestaurants()),
    deleteRestaurant: (restaurant) => dispatch(deleteRestaurant(restaurant))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);
