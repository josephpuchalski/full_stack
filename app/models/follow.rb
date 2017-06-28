class Follow < ApplicationRecord
  validates :following_id, :follower_id, presence: true;
  validates :following_id,  uniqueness: { scope: :follower_id,
    message: "You are already following!" }

  validates :follower_id,  uniqueness: { scope: :following_id,
    message: "You are already following!" }

  belongs_to :follower,
  primary_key: :id,
  class_name: :User,
  foreign_key: :follower_id

  belongs_to :following,
  primary_key: :id,
  class_name: :User,
  foreign_key: :following_id
end
