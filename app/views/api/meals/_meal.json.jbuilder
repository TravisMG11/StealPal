# json.extract! meal, :id, :name, :limit, :restaurant_id,
json.id meal.id
json.name meal.name
json.limit meal.limit
json.restaurant_id meal.restaurant_id
json.image_url asset_path(meal.image.url)
