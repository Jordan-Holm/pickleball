class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :team_name
      t.string :player_1
      t.string :player_2
      t.belongs_to :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
