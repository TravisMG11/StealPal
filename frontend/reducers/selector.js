import { values } from "lodash";

export const asArray = ({ restaurants }) => (
  Object.keys(restaurants).map(key => restaurants[key])
);

export const searchRestaurants = (restaurants, searchTerm) => (
  restaurants.filter(function(restaurant) {
    const restaurantName = restaurant.name.toLowerCase();
    return restaurantName.includes(searchTerm.toLowerCase());
  })


);

export const filterBySize = (restaurants, searchSize) => {
  if (!values(searchSize).includes(true)) {
    return restaurants;
  }
    restaurants.filter(function(restaurant) {
      const portionSize = restaurant.meal.portion_size;
      // if (portionSize === searchSize) {
      //   return true;
      // }
      portionSize === searchSize
    })

};


export const filterByType = (restaurants, searchType) => {
  if ( searchType === '' ) {
    return restaurants;
  } else {
    restaurants.filter(function(restaurant) {
      const cuisineType = restaurant.cuisine_type;
      if (cuisineType === searchType) {
        return true;
      }
    })
  }

};
