@meals.each do |meal|
  json.set! meal.id do
    json.partial! 'meal', meal: meal
  end
end
