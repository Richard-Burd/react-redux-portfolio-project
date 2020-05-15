# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Airframe.create!(name: "Xwing", weight: 3, config: "wing", image: "imgur.com/futures/1")
Airframe.create!(name: "RV-Jet", weight: 4, config: "wing", image: "imgur.com/futures/2")
