
// export function show_meals() {
//   return $.ajax({
//     url: "/api/meals",
//     method: "GET",
//   });
// }
//
// export function removeRestaurant(meal) {
//   return $.ajax({
//     method: "DELETE",
//     url: `api/meals/${meal.id}`
//   });
// }
//
// export function addRestaurant(meal) {
//   return $.ajax({
//     url: "/api/meals",
//     method: "POST",
//     data: {meal}
//   });
// }

export function reserveMeal(meal_id) {
  return $.ajax({
    url: "/api/meals",
    method: "POST",
    data: {meal_id}
  });
}

export function removeRestaurant(meal_id) {
  return $.ajax({
    method: "DELETE",
    url: `api/meals/${meal_id}`
  });
}
// { name: 'food',
//   resto: 'good burger'
// }
