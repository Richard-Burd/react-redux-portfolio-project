class CreatePlugins < ActiveRecord::Migration[6.0]
  def change
    create_table :plugins do |t|
      t.integer :arspd_enable
      t.integer :arspd_use
      t.integer :mag_enable
      t.integer :airframe_id
    end
  end
end
