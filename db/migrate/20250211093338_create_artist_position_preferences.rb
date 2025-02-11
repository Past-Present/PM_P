class CreateArtistPositionPreferences < ActiveRecord::Migration[8.0]
  def change
    create_table :artist_position_preferences do |t|
      t.references :artist, null: false, foreign_key: true
      t.references :work_item, null: false, foreign_key: true
      t.integer :prefer_type

      t.timestamps
    end
  end
end
