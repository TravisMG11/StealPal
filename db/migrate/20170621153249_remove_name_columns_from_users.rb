class RemoveNameColumnsFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :firstname
    remove_column :users, :lastname
  end
end
