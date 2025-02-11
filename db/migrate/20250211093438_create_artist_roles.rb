class CreateArtistRoles < ActiveRecord::Migration[8.0]
  def change
    create_table :artist_roles do |t|
      t.references :work_item, null: false, foreign_key: true
      t.references :artist, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
