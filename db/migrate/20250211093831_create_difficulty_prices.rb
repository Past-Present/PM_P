class CreateDifficultyPrices < ActiveRecord::Migration[8.0]
  def change
    create_table :difficulty_prices do |t|
      t.references :work_item, null: false, foreign_key: true
      t.integer :difficulty_level
      t.decimal :price, precision: 10, scale: 2

      t.timestamps
    end
  end
end
