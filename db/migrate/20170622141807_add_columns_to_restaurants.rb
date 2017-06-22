class AddColumnsToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :latitude, :integer
    add_column :restaurants, :longitude, :integer
    add_column :restaurants, :address, :string
  end
end
