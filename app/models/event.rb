class Event < ApplicationRecord
  belongs_to :group
  has_many :rsvps
  has_many :users, through: :rsvps

  validates :location, presence: true
  validates :meal_type, presence: true
  validates :time, presence: true

  def as_json(options = {})
    super(methods: :group)
  end
end
