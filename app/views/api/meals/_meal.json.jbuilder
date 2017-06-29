# json.extract! meal, :id, :name, :limit, :restaurant_id,
json.id meal.id
json.name meal.name
json.limit meal.limit
json.restaurant_id meal.restaurant_id
json.portion_size meal.portion_size
json.image_url asset_path(meal.image.url)
