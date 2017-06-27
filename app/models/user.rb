class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :name, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, :email, uniqueness: true

  has_attached_file :profile_image, default_url: "default.jpg"
  validates_attachment_content_type :profile_image, content_type: /\Aimage\/.*\Z/

  has_many :posts

  has_many :followings,
  class_name: :Follow,
  primary_key: :id,
  foreign_key: :follower_id

  has_many :followers,
  class_name: :Follow,
  primary_key: :id,
  foreign_key: :following_id

  attr_reader :password
  after_initialize :ensure_session_token!

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token!
    self.session_token ||= User.generate_session_token
  end
end
