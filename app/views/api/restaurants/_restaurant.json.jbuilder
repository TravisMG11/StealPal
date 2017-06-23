json.extract! restaurant, :id, :name, :latitude, :longitude, :address

json.meal do
  json.partial! 'api/meals/meal', meal: restaurant.current_meal
end
