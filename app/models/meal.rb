class Meal < ActiveRecord::Base
  validates :name, :limit, :restaurant_id, presence: true

  belongs_to :restaurant


end
