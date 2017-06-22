export const add_rest = restaurant => (
  $.ajax({
    method: 'POST',
    url: '/api/restaurants',
    data: restaurant
  })
);

export const show_rests = restaurant => (
  $.ajax({
    method: 'POST',
    url: '/api/restaurants',
    data: restaurant
  })
);

export const remove_rest = restaurant => (
  $.ajax({
    method: 'DELETE',
    url: '/api/restaurants',
  })
);
