class Serie < ApplicationRecord

  belongs_to :user

  validates :title, presence: true
  validates :imdbId, presence: true
end
