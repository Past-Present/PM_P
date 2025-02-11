class CreateProjects < ActiveRecord::Migration[8.0]
  def change
    create_table :projects do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name_en
      t.string :name_tw
      t.string :google_drive_token
      t.money :budget
      t.datetime :start_date
      t.datetime :end_date
      t.references :currency, null: false, foreign_key: true
      t.integer :status

      t.timestamps
    end
  end
end
