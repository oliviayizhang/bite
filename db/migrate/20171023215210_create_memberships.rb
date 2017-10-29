class CreateMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :memberships do |t|
      t.belongs_to :user, null: false
      t.belongs_to :group, null: false

      t.timestamps
    end
  end
end
