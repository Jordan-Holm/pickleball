class Team < ApplicationRecord
  belongs_to :game

  validates :team_name, :player_1, :player_2, presence: true
end
