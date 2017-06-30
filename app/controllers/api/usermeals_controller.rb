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
    if @usermeal.save
      @meal = @usermeal.meal
      render "api/usermeals/show"
    else
      render json: ["Couldn't Reserve Meal"], status: 422
    end
  end

  def destroy
    usermeal = Usermeal.find_by(id: params[:id])
    usermeal.destroy
    render json: {}
  end

  private

  def usermeal_params
    params.require(:usermeal).permit(:meal_id, :reservation_time)
  end
end
