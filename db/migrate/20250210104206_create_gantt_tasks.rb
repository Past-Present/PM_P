class CreateGanttTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :gantt_tasks do |t|
      t.references :work_item, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true
      t.datetime :start_date
      t.datetime :end_date
      t.decimal :progress, precision: 5, scale: 2

      t.timestamps
    end
  end
end
