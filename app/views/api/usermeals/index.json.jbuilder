@meals.each do |usermeal|
  json.set! usermeal.id do
    json.partial! 'usermeal', usermeal: usermeal
  end
end
