# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(email: 'hungry@hunger.com', password: 'starving')
Restaurant.create(name: "Yo Momma's Diner", latitude: 1, longitude: 1, address: "Down the Street")
