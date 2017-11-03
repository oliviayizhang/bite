class Event < ApplicationRecord
  belongs_to :group
  belongs_to :user
  has_many :rsvps
  has_many :users, through: :rsvps

  validates :location, presence: true
  validates :meal_type, presence: true
  validates :time, presence: true
  validates :user, presence: true

  def self.for_groups_of(user)
    where("group_id IN (?)", user.memberships.select(:group_id))
  end

  def as_json(options = {})
    super(methods: :group)
  end
end
