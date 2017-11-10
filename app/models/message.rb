class Message < ApplicationRecord
  belong_to :user
  belong_to :group

  validates :user, presense: true
  validates :group, presense: true
end
