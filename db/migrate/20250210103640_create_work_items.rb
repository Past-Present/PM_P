class CreateWorkItems < ActiveRecord::Migration[8.0]
  def change
    create_table :work_items do |t|
      t.string :name_en
      t.string :name_tw
      t.integer :sorting
      t.boolean :is_show
      t.integer :unit
      t.money :budget

      t.timestamps
    end
  end
end
