# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Restaurant.destroy_all
Meal.destroy_all
#s3_host_name: “s3-#{ENV[‘s3_region’]}.amazonaws.com”
# compare the url on your model with the link specified for your image on aws(i.e. in your bucket). If your url is missing s3-‘your_region’ then you will need this key


User.create!(email: 'hungry@hunger.com', password: 'starving')
rest1 = Restaurant.create!(name: "Yo Momma's Diner", latitude: 40.742033, longitude: -73.989041, address: "999 Broadway", cuisine_type: "American")
rest2 = Restaurant.create!(name: "Mos Eisley Cantina", latitude: 40.743624, longitude: -73.996233, address: "210 7th Ave", cuisine_type: "Vegetarian")
rest3 = Restaurant.create!(name: "Joey P's Pizzeria", latitude: 40.740889, longitude: -73.990295, address: "170 5th Ave", cuisine_type: "Italian")
rest4 = Restaurant.create!(name: "David Chen's Burger Pen", latitude: 40.745372, longitude: -73.990614, address: "796 6th Ave", cuisine_type: "American")
rest5 = Restaurant.create!(name: "Bob's Burgers", latitude: 40.745242, longitude: -73.995004, address: "250 7th Ave", cuisine_type: "Cartoon")
rest6 = Restaurant.create!(name: "Charlie's Cephalopods", latitude: 40.744032, longitude: -73.993608, address: "124 W24th St", cuisine_type: "American")
rest7 = Restaurant.create!(name: "Vlad's Vegan Beach Restaurant", latitude: 40.745536, longitude: -73.992939, address: "143 W26th St", cuisine_type: "Vegetarian")
rest8 = Restaurant.create!(name: "The Krusty Krab", latitude: 40.746308, longitude:  -73.991344, address: "116 W28th St", cuisine_type: "Cartoon")
rest9 = Restaurant.create!(name: "Soprano's", latitude: 40.742019, longitude: -73.993671, address: "675 6th Ave", cuisine_type: "Italian")
rest10 = Restaurant.create!(name: "Hola Pasta Mexitalian", latitude: 40.740583, longitude: -73.993302, address: "40 W20th St", cuisine_type: "Fusion")
rest11 = Restaurant.create!(name: "Wen Bo's Rugged Jaw Saloon", latitude: 40.742476, longitude: -73.991409, address: "49 W23rd St", cuisine_type: "Rugged")
rest12 = Restaurant.create!(name: "Skinny Dipping Sauces With Wadah", latitude: 40.741950, longitude: -73.992887, address: "56 W 22nd St", cuisine_type: "American")


moms = File.open('app/assets/images/soop.jpg')
bantha = File.open('app/assets/images/banthamilk.jpg')
myman = File.open('app/assets/images/za.jpg')
chen = File.open('app/assets/images/chenburger.jpg')
bobs = File.open('app/assets/images/bb.jpg')
charlies = File.open('app/assets/images/charlies.jpg')
vlad = File.open('app/assets/images/tofu.jpg')
patties = File.open('app/assets/images/2kps.jpg')
blackout = File.open('app/assets/images/fettuccine.jpg')
fusion = File.open('app/assets/images/taco.jpg')
pile = File.open('app/assets/images/pileameat.jpg')
sauce1 = File.open('app/assets/images/sauces1.jpg')
 # = File.open('app/assets/images/.jpg')

Meal.create!(name: "Mom's Chicken Noodle", restaurant_id: rest1.id, portion_size: "L", limit: 2, image: moms)
Meal.create!(name: "Blue Bantha Milk", restaurant_id: rest2.id, portion_size: "S", limit: 2, image: bantha)
Meal.create!(name: "Medium Pepperoni", restaurant_id: rest3.id, portion_size: "M", limit: 2, image: myman)
Meal.create!(name: "The Best Burger and fries", restaurant_id: rest4.id, portion_size: "L", limit: 2, image: chen)
Meal.create!(name: "So Gouda Burger", restaurant_id: rest5.id, portion_size: "M", limit: 2, image: bobs)
Meal.create!(name: "Will the Willing Meal", restaurant_id: rest6.id, portion_size: "S", limit: 2, image: charlies)
Meal.create!(name: "Tofu Scramble", restaurant_id: rest7.id, portion_size: "S", limit: 2, image: vlad)
Meal.create!(name: "Two Krabby Patties", restaurant_id: rest8.id, portion_size: "L", limit: 2, image: patties)
Meal.create!(name: "Fettuccine Alfredo Blackout", restaurant_id: rest9.id, portion_size: "L", limit: 2, image: blackout)
Meal.create!(name: "Chicken Parm Tacos", restaurant_id: rest10.id, portion_size: "S", limit: 2, image: fusion)
Meal.create!(name: "Pile O' Meat", restaurant_id: rest11.id, portion_size: "L", limit: 2, image: pile)
Meal.create!(name: "Low Fat Sampler", restaurant_id: rest12.id, portion_size: "S", limit: 2, image: sauce1)

[rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8, rest9, rest10, rest11, rest12].each(&:set_todays_meal!)

# Mos Eisley Cantina 210 7th Ave
#
# Charlie's Cephalopods 124 W24th St
#
# David Chen's Burger Pen 796 6th Ave
#
# Wen Bo's Pizzaria 49 W23rd St
#
# Soprano's 675 6th Ave
#
# Hola Pasta Mexitalian 40 W20th St
#
# Yo Mama's Diner 1097 Broadway
#
# Vlad's Vegan Beach Restaurant 143 W26th St
#
# Bob's Burgers 250 7th Ave
#
# The Krusty Krab 177 W24th St
#
# Yo Momma's Diner Down The Street
