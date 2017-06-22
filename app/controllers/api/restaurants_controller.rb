class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def create
    @restaurant = Restaurant.create!(restaurant_params)
    render :index
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :latitude, :longitude)
  end
end
