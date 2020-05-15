class CreateAttitudes < ActiveRecord::Migration[6.0]
  def change
    create_table :attitudes do |t|
      t.integer :lim_roll_cd
      t.integer :lim_pitch_max
      t.integer :lim_pitch_min
      t.integer :airframe_id
    end
  end
end
