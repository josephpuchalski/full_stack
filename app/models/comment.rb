class Comment < ApplicationRecord
  validates :user_id, :post_id, :body, presence: true

  belongs_to :post
  belongs_to :user
  
end
