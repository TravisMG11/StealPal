class Restaurant < ActiveRecord::Base
  validates :name, :latitude, :longitude, :cuisine_type, presence: true

  has_many :meals

  def current_meal
    self.meals.find(todays_meal_id)
  end

  def set_todays_meal!
    self.todays_meal_id = self.meals.sample.id
    self.save!
  end

  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
  end

  # def new
  #
  # end
  #
  # def show
  #
  # end
  #
  # def index
  #
  # end
  #
  # def create
  #
  # end
  #
  # def update
  #
  # end
  #
  # def delete
  #
  # end
end
