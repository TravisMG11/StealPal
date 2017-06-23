class AddLimitNRestToMeals < ActiveRecord::Migration
  def change
    add_column :meals, :limit, :integer
    add_column :meals, :restaurant_id, :integer
  end
end
