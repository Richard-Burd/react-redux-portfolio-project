class CreatePids < ActiveRecord::Migration[6.0]
  def change
    create_table :pids do |t|
      t.integer :rll2srv_rmax
      t.integer :rll2srv_d
      t.integer :rll2srv_t_const
      t.integer :airframe_id
    end
  end
end
