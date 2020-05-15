class CreateAirframes < ActiveRecord::Migration[6.0]
  def change
    create_table :airframes do |t|
      t.string :name
      t.integer :weight
      t.integer :config
      t.string :image
    end
  end
end
