class Game < ApplicationRecord
  belongs_to :tournament

  validates :placements, :time, presence: true
end
