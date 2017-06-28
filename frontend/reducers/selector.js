export const asArray = ({ restaurants }) => (
  Object.keys(restaurants).map(key => restaurants[key])
);

export const searchRestaurants = (restaurants, searchTerm) => (
  restaurants.filter(function(restaurant) {
    const restaurantName = restaurant.name.toLowerCase();
    return restaurantName.includes(searchTerm.toLowerCase());
  })
);
