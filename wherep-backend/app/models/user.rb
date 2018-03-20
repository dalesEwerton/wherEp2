class User < ApplicationRecord


  has_many :series

  has_secure_password

  validates :name, presence: true
  validates :email, presence: true
  validates :password_digest, presence: true
end
