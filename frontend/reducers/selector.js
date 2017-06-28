export const asArray = ({ restaurants }) => (
  Object.keys(restaurants).map(key => restaurants[key])
);

export const searchRestaurants = (restaurants, searchTerm) => (
  restaurants.filter(function(restaurant) {
    const restaurantName = restaurant.name.toLowerCase();
    return restaurantName.includes(searchTerm.searchTerm.toLowerCase());
  })


);

export const filterBySize = (restaurants, searchSize) => (
  restaurants.filter(function(restaurant) {
    const portionSize = restaurant.meal.portion_size;
    if (portionSize === searchSize) {
      return true ;
    }
  })
);

// restaurants do not yet have cuisine_type!!!!
export const filterByType = (restaurants, searchType) => (
  restaurants.filter(function(restaurant) {
    const cuisineType = restaurant.meal.cuisine_type;
    if (cuisineType === searchType) {
      return true;
    }
  })
);
