class CreateTournaments < ActiveRecord::Migration[7.0]
  def change
    create_table :tournaments do |t|
      t.string :tname
      t.string :division
      t.string :where
      t.datetime :when
      t.string :gender

      t.timestamps
    end
  end
end
