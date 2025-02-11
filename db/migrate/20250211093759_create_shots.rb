class CreateShots < ActiveRecord::Migration[8.0]
  def change
    create_table :shots do |t|
      t.references :task, null: false, foreign_key: true
      t.integer :shot_number
      t.integer :priority
      t.integer :difficulty
      t.integer :frames
      t.string :preview_url
      t.datetime :deadline
      t.text :notes
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
