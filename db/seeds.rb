# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Restaurant.destroy_all

#


User.create!(email: 'hungry@hunger.com', password: 'starving')
rest1 = Restaurant.create!(name: "Yo Momma's Diner", latitude: 1, longitude: 1, address: "Nunya Bizniss")
rest2 = Restaurant.create!(name: "Mos Eisley Cantina", latitude: 2, longitude: 2, address: "Nunya Bizniss")
rest3 = Restaurant.create!(name: "Joey P's Pizzeria", latitude: 3, longitude: 3, address: "Nunya Bizniss")
rest4 = Restaurant.create!(name: "David Chen's Burger Pen", latitude: 4, longitude: 4, address: "Nunya Bizniss")
rest5 = Restaurant.create!(name: "Bob's Burgers", latitude: 5, longitude: 5, address: "Nunya Bizniss")
rest6 = Restaurant.create!(name: "Charlie's Cephalopods", latitude: 6, longitude: 6, address: "Nunya Bizniss")
rest7 = Restaurant.create!(name: "Vlad's Vegan Beach Restaurant", latitude: 7, longitude: 7, address: "Nunya Bizniss")
rest8 = Restaurant.create!(name: "The Krusty Krab", latitude: 8, longitude: 8, address: "Nunya Bizniss")
rest9 = Restaurant.create!(name: "Soprano's", latitude: 9, longitude: 9, address: "Nunya Bizniss")
rest10 = Restaurant.create!(name: "Hola Pasta Mexitalian", latitude: 10, longitude: 10, address: "Nunya Bizniss")
rest11 = Restaurant.create!(name: "Wen Bo's Rugged Jaw Saloon", latitude: 11, longitude: 11, address: "Nunya Bizniss")


moms = File.open('app/assets/images/soop.jpg')
Meal.create!(name: "Mom's Chicken Noodle", restaurant_id: rest1.id, portion_size: "L", limit: 2, image: moms)
Meal.create!(name: "Blue Bantha Milk", restaurant_id: rest2.id, portion_size: "S", limit: 2, image: '.jpg')
Meal.create!(name: "Medium Cheese and Cherry Coke", restaurant_id: rest3.id, portion_size: "M", limit: 2, image: '.jpg')
Meal.create!(name: "The Best Burger and fries", restaurant_id: rest4.id, portion_size: "L", limit: 2, image: '.jpg')
Meal.create!(name: "So Gouda Burger", restaurant_id: rest5.id, portion_size: "M", limit: 2, image: '.jpg')
Meal.create!(name: "Squid Sticks", restaurant_id: rest6.id, portion_size: "S", limit: 2, image: '.jpg')
Meal.create!(name: "Tofu Scramble", restaurant_id: rest7.id, portion_size: "S", limit: 2, image: '.jpg')
Meal.create!(name: "Two Krabby Patties", restaurant_id: rest8.id, portion_size: "L", limit: 2, image: '.jpg')
Meal.create!(name: "Fettuccine Alfredo Blackout", restaurant_id: rest9.id, portion_size: "large", limit: 2, image: '.jpg')
Meal.create!(name: "Chicken Parm Tacos", restaurant_id: rest10.id, portion_size: "large", limit: 2, image: '.jpg')
Meal.create!(name: "Roast Turkey Sandwich and Fries", restaurant_id: rest11.id, portion_size: "large", limit: 2, image: '.jpg')

[rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8, rest9, rest10, rest11].each(&:set_todays_meal!)

# Mos Eisley Cantina210 7th Ave
#
# Charlie's Cephalopods124 W24th St
#
# David Chen's Burger Pen796 6th Ave
#
# Wen Bo's Pizzaria49 W23rd St
#
# Soprano's675 6th Ave
#
# Hola Pasta Mexitalian40 W20th St
#
# Yo Mama's Diner1097 Broadway
#
# Vlad's Vegan Beach Restaurant143 W26th St
#
# Bob's Burgers250 7th Ave
#
# The Krusty Krab177 W24th St
#
# Yo Momma's Diner Down The Street
