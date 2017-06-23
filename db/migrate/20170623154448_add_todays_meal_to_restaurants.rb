class AddTodaysMealToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :todays_meal_id, :integer
  end
end
