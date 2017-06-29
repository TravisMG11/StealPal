class UserusermealsController < ApplicationController\
  # def index
  #   @usermeals = UserMeal.all
  # end
  #
  # def show
  #   @usermeal = UserMeal.find(params[:id])
  # end

  def create
    @usermeal = UserMeal.new(usermeal_params)
    @usermeal.user_id = currentUser.id
    render :show
  end

  private

  def usermeal_params
    params.require(:usermeal).permit(:meal_id)
  end
end
