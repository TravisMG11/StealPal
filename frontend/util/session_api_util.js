export const log_in = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const sign_up = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  })
);

export const log_out = user => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);
