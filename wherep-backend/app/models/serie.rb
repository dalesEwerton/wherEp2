class Serie < ApplicationRecord
  validates :title, presence: true
  validates :imdbId, presence: true
end
