class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.references :work_item, null: false, foreign_key: true
      t.references :artist, null: false, foreign_key: true
      t.integer :status
      t.integer :frames

      t.timestamps
    end
  end
end
