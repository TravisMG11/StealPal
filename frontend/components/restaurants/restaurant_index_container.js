import React from "react";
import { connect } from "react-redux";
import { showRestaurants, deleteRestaurant, createRestaurant } from "../../actions/restaurant_actions";
import { values } from "lodash";
import RestaurantsIndex from "./restaurants_index";
import { asArray } from '../../reducers/selector';

function selectAllRestaurants(restaurants) {
  return values(restaurants);
}

function mapStateToProps({restaurants}) {
  return {
    restaurants: selectAllRestaurants(restaurants)
  };
}
// const mapStateToProps = state => ({
//   restaurants: asArray(state)
// });

function mapDispatchToProps(dispatch) {
  return {
    createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
    // showRestaurants: () => dispatch(showRestaurants()),
    deleteRestaurant: (restaurant) => dispatch(deleteRestaurant(restaurant))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsIndex);
