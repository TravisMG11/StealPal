import React from "react";
import { connect } from "react-redux";
import { showRestaurants, deleteRestaurant, createRestaurant } from "../../actions/restaurant_actions";
import { values } from "lodash";
import RestaurantsIndex from "./restaurants_index";
import { asArray } from '../../reducers/selector';
import { searchRestaurants } from '../../reducers/selector';

function mapStateToProps(state) {
  const nameSearchResults = searchRestaurants(values(state.restaurants), state.searchTerm);
  const sizeSearchResults = sizeRestaurants(nameSearchResults, state.size);
  // const typeSearchResults = typeRestaurants(sizeSearchResults, state.type);

  return {
    restaurants: typeSearchResults
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
