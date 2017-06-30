class Api::MealsController < ApplicationController
  def index
    @meals = Meal.all
  end

  def show
    @meal = Meal.find(params[:id])
  end

  def create
    @meal = Meal.create!(meal_params)
    render :show
  end

  private

  def meal_params
    debugger
    params.require(:meal).permit(:name, :id, :limit, :portion_size, :restaurant_id, :restaurant_address, :date, :pickup_time, :image_url)
  end
end
