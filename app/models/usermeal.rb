class Usermeal < ActiveRecord::Base
  validates :user_id, presence: true, uniqueness: true
  validates :meal_id, presence: true

  belongs to :user

  belongs_to :meal
end
