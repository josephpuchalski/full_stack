class Post < ApplicationRecord
  validates :caption, :user_id, presence: true

  belongs_to :user

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


end
