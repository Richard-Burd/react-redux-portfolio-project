# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Airframe.create!(name: "Xwing", weight: 3, config: "wing", image: "imgur.com/futures/1")
Attitude.create!(airframe_id: 1, lim_roll_cd: 5, lim_pitch_max: 6, lim_pitch_min: 7)
Pid.create!(airframe_id: 1, rll2srv_rmax: 5, rll2srv_d: 6, rll2srv_t_const: 7)
Plugin.create!(airframe_id: 1, arspd_enable: 5, arspd_use: 6, mag_enable: 7)

Airframe.create!(name: "RV-Jet", weight: 4, config: "wing", image: "imgur.com/futures/2")
Attitude.create!(airframe_id: 2, lim_roll_cd: 7, lim_pitch_max: 8, lim_pitch_min: 9)
Pid.create!(airframe_id: 2, rll2srv_rmax: 7, rll2srv_d: 8, rll2srv_t_const: 9)
Plugin.create!(airframe_id: 2, arspd_enable: 7, arspd_use: 8, mag_enable: 9)
