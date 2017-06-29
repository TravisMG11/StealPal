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
    return restaurants.filter(function(restaurant) {
      const portionSize = restaurant.meal.portion_size;
      if (searchSize[portionSize]) {
        return true;
      }
    })

};


export const filterByType = (restaurants, searchType) => {
  if ( searchType === '' ) {
    return restaurants;
  } else {
    return restaurants.filter(function(restaurant) {
      const cuisineType = restaurant.cuisine_type;
      if (cuisineType === searchType) {
        return true;
      }
    })
  }

};
