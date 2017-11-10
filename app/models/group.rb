class Group < ApplicationRecord
  has_many :memberships
  has_many :users, through: :memberships
  has_many :events
  has_many :messages

  validates :name, presence: true, uniqueness: true
end
