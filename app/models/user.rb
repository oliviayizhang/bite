class User < ApplicationRecord
  mount_uploader :avatar, AvatarUploader

  has_many :memberships
  has_many :groups, through: :memberships
  has_many :rsvps
  has_many :events, through: :rsvps

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  validates_integrity_of  :avatar
  validates_processing_of :avatar


  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  private
    def avatar_size_validation
      errors[:avatar] << "should be less than 500KB" if avatar.size > 0.5.megabytes
    end
end
