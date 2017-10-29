class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :location, null: false
      t.string :meal_type, null: false
      t.string :time, null: false
      t.belongs_to :group, null: false

      t.timestamps
    end
  end
end
