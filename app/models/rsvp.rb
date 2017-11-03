class Rsvp < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :user, presence: true
  validates :event, presence: true, uniqueness: { scope: :user_id }
end
