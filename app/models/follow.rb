class Follow < ApplicationRecord
  validates :following_id, :follower_id, presence: true;
end
