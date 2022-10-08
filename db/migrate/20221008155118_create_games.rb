class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :placements
      t.datetime :gtime
      t.belongs_to :tournament, null: false, foreign_key: true

      t.timestamps
    end
  end
end
