class AddCoordinateFloatsToRests < ActiveRecord::Migration
  def change
    add_column :restaurants, :latitude, :float
    add_column :restaurants, :longitude, :float
  end
end
