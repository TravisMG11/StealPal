json.extract! restaurant, :id, :name, :latitude, :longitude, :address


# json.meals.current_meal
json.current_meal do
  json.extract! restaurant.current_meal :name
  json.image_url asset_patch(restauarant.currentmeal.image_url)
end
