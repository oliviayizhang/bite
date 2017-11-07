class AddLatitudeToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :latitude, :float
  end
end
