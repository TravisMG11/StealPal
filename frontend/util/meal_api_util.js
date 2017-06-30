
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

export function reserveMeal(usermeal) {
  return $.ajax({
    url: "/api/usermeals",
    method: "POST",
    data: usermeal
  });
}

export function removeUsermeal(usermeal_id) {
  return $.ajax({
    method: "DELETE",
    url: `api/usermeals/${usermeal_id}`
  });
}
// { name: 'food',
//   resto: 'good burger'
// }
