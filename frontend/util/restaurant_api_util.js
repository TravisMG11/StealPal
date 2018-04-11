export function show_restaurants(filters) {
  return $.ajax({
    url: "/api/restaurants",
    method: "GET",
    data: filters
  });
}

export function removeRestaurant(restaurant) {
  return $.ajax({
    method: "DELETE",
    url: `api/restaurants/${restaurant.id}`
  });
}

export function addRestaurant(restaurant) {
  return $.ajax({
    url: "/api/restaurants",
    method: "POST",
    data: {restaurant}
  });
}
