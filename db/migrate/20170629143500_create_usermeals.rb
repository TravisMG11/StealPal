class CreateUsermeals < ActiveRecord::Migration
  def change
    create_table :usermeals do |t|
      t.integer :user_id, null: false
      t.integer :meal_id, null: false
      t.time :reservation_time
      t.timestamps null: false
    end
  end
end
