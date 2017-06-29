class Like < ApplicationRecord
  validates :post_id, :user_id, presence: true;

  belongs_to :user
  belongs_to :post
  
end
