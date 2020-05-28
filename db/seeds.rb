# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Airframe.create!(name: "Skywalker X8", weight: 3, config: "Flying Wing", image: "https://i.imgur.com/jqZjuaH.jpg")
Attitude.create!(airframe_id: 1, lim_roll_cd: 32, lim_pitch_max: 33, lim_pitch_min: -19)
Pid.create!(airframe_id: 1, rll2srv_rmax: 5, rll2srv_d: 6, rll2srv_t_const: 7)
Plugin.create!(airframe_id: 1, arspd_enable: 5, arspd_use: 6, mag_enable: 7)

Airframe.create!(name: "UAV Factory Penguin B", weight: 4, config: "Conventional", image: "https://i.imgur.com/pcnKMKW.jpg")
Attitude.create!(airframe_id: 2, lim_roll_cd: 12, lim_pitch_max: 19, lim_pitch_min: -17)
Pid.create!(airframe_id: 2, rll2srv_rmax: 7, rll2srv_d: 8, rll2srv_t_const: 9)
Plugin.create!(airframe_id: 2, arspd_enable: 7, arspd_use: 8, mag_enable: 9)

Airframe.create!(name: "Range Video RVJET", weight: 3, config: "Flying Wing", image: "https://i.imgur.com/tFgWtCl.jpg")
Attitude.create!(airframe_id: 3, lim_roll_cd: 30, lim_pitch_max: 37, lim_pitch_min: -33)
Pid.create!(airframe_id: 3, rll2srv_rmax: 30, rll2srv_d: 60, rll2srv_t_const: 90)
Plugin.create!(airframe_id: 3, arspd_enable: 30, arspd_use: 60, mag_enable: 90)
