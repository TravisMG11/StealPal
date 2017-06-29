json.extract! restaurant, :id, :name, :latitude, :longitude, :address, :cuisine_type

json.meal do
  json.partial! 'api/meals/meal', meal: restaurant.current_meal
end
