// export const add_restaurant = restaurant => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/restaurants',
//     data: restaurant
//   })
// );
//
// export const show_restaurants = () => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/restaurants',
//     data: restaurant
//   })
// );
//
// export const remove_restaurant = restaurant => (
//   $.ajax({
//     method: 'DELETE',
//     url: '/api/restaurants',
//   })
// );


export function show_restaurants() {
  return $.ajax({
    url: "/api/restaurants",
    method: "GET",
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
