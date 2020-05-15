# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_15_155545) do

  create_table "airframes", force: :cascade do |t|
    t.string "name"
    t.integer "weight"
    t.integer "config"
    t.string "image"
  end

  create_table "attitudes", force: :cascade do |t|
    t.integer "lim_roll_cd"
    t.integer "lim_pitch_max"
    t.integer "lim_pitch_min"
    t.integer "airframe_id"
  end

  create_table "pids", force: :cascade do |t|
    t.integer "rll2srv_rmax"
    t.integer "rll2srv_d"
    t.integer "rll2srv_t_const"
    t.integer "airframe_id"
  end

  create_table "plugins", force: :cascade do |t|
    t.integer "arspd_enable"
    t.integer "arspd_use"
    t.integer "mag_enable"
    t.integer "airframe_id"
  end

end
