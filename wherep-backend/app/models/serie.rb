class Serie < ApplicationRecord

  belongs_to :user

  validates :Title, presence: true
  validates :imdbId, presence: true
end
