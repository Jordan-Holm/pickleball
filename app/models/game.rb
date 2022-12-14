class Game < ApplicationRecord
  belongs_to :tournament

  has_many :teams, dependent: :destroy

  validates :placements, :gtime, presence: true
end
