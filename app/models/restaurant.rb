class Restaurant < ActiveRecord::Base
  validates :name, :latitude, :longitude, presence: true

  has_many :meals

  def current_meal
    self.meals.find(todays_meal_id)
  end

  def set_todays_meal!
    self.todays_meal_id = self.meals.sample.id
    self.save!
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
