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
    params.require(:meal).permit(:name, :limit, :restaurant_id)
  end
end
