class AddPortionSizeToMeals < ActiveRecord::Migration
  def change
    add_column :meals, :portion_size, :string
  end
end
