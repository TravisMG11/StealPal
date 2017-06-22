@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.partial! 'restaurant', restaurant: restaurant
  end
end
