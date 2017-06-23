# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Restaurant.destroy_all

User.create(email: 'hungry@hunger.com', password: 'starving')
Restaurant.create(name: "Yo Momma's Diner", latitude: 1, longitude: 1, address: "Nunya Bizniss")
Restaurant.create(name: "Mos Eisley Cantina", latitude: 2, longitude: 2, address: "Nunya Bizniss")
Restaurant.create(name: "Joey P's Pizzeria", latitude: 3, longitude: 3, address: "Nunya Bizniss")
Restaurant.create(name: "David Chen's Burger Pen", latitude: 4, longitude: 4, address: "Nunya Bizniss")
Restaurant.create(name: "Bob's Burgers", latitude: 5, longitude: 5, address: "Nunya Bizniss")
Restaurant.create(name: "Charlie's Cephalopods", latitude: 5, longitude: 5, address: "Nunya Bizniss")
Restaurant.create(name: "Vlad's Vegan Beach Restaurant", latitude: 6, longitude: 6, address: "Nunya Bizniss")
Restaurant.create(name: "The Krusty Krab", latitude: 7, longitude: 7, address: "Nunya Bizniss")
Restaurant.create(name: "Soprano's", latitude: 8, longitude: 8, address: "Nunya Bizniss")
Restaurant.create(name: "Hola Pasta Mexitalian", latitude: 9, longitude: 9, address: "Nunya Bizniss")
Restaurant.create(name: "Wen Bo's Rugged Jaw Saloon", latitude: 10, longitude: 10, address: "Nunya Bizniss")

# Meal.create()


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
