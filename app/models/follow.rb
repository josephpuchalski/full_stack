class Follow < ApplicationRecord
  validates :following_id, :follower_id, presence: true;

  belongs_to :follower,
  primary_key: :id,
  class_name: :User,
  foreign_key: :follower_id

  belongs_to :following,
  primary_key: :id,
  class_name: :User,
  foreign_key: :following_id
end
