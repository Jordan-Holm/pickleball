class Tournament < ApplicationRecord

    validates :tname, :division, :where, :when, :gender, presence: true
end
