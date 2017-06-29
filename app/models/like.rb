class Like < ApplicationRecord
  validates :post_id, :user_id, presence: true;
  validates :post_id,  uniqueness: { scope: :user_id,
    message: "You liked the post!" }
  belongs_to :user
  belongs_to :post

end
