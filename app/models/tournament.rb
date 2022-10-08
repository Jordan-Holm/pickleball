class Tournament < ApplicationRecord
    has_many :games, dependent: :destroy

    validates :tname, :division, :where, :when, :gender, presence: true
end
