json.usermeal_id usermeal.id
# json.user_id usermeal.user_id
# json.meal_id usermeal.user_id
json.reservation_time usermeal.reservation_time


json.id meal.id
json.name meal.name
json.limit meal.limit
json.portion_size meal.portion_size
json.restaurant_id meal.restaurant_id
json.restaurant meal.restaurant
json.restaurant_address meal.restaurant.address
json.date (meal.usermeals.find_by(user_id: current_user.id)&.created_at&.+(1))
json.pickup_time meal.usermeals.find_by(user_id: current_user.id)&.reservation_time


json.image_url asset_path(meal.image.url)
