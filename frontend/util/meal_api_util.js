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
