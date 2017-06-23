class Meal < ActiveRecord::Base
  validates :name, :limit, :retaurant_id, presence: true

  belongs_to :restaurant


end
