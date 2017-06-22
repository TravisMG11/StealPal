class Restaurant < ActiveRecord::Base
  validates :name, :latitude, :longitude, presence: true
  # has_many :meals

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
