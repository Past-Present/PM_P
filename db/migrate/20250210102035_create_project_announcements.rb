class CreateProjectAnnouncements < ActiveRecord::Migration[8.0]
  def change
    create_table :project_announcements do |t|
      t.references :project, null: false, foreign_key: true
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
