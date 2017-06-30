class Api::UsermealsController < ApplicationController
  # def index
  #   @usermeals = UserMeal.all
  # end
  #
  # def show
  #   @usermeal = UserMeal.find(params[:id])
  # end

  def create
    @usermeal = Usermeal.new(usermeal_params)
    @usermeal.user_id = current_user.id
    render "api/usermeals/show"
  end

  private

  def usermeal_params
    params.require(:usermeal).permit(:meal_id, :reservation_time)
  end
end
