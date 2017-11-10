class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.belongs_to :user, null: false
      t.belongs_to :group, null: false
    end
  end
end
