class Usermeal < ActiveRecord::Base
  # validates :user_id, presence: true
  # validates :meal_id, presence: true
  # validates :user_id, :uniqueness => { :scope => :meal_id }
  validates :user_id, uniqueness: { scope: :meal_id }


  belongs_to :user

  belongs_to :meal
end
