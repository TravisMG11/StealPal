class RemoveCoordinatesFromRestaurants < ActiveRecord::Migration
  def change
    remove_column :restaurants, :latitude
    remove_column :restaurants, :longitude
  end
end
