class AddTypeToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :cuisine_type, :string
  end
end
