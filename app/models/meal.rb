class Meal < ActiveRecord::Base
  validates :name, :limit, :restaurant_id, :portion_size, presence: true

  belongs_to :restaurant
  has_many :users

  has_attached_file :image, default_url: "burgernfries.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
# https://ichef-1.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg
end
