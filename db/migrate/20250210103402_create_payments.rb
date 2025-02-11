class CreatePayments < ActiveRecord::Migration[8.0]
  def change
    create_table :payments do |t|
      t.references :project, null: false, foreign_key: true
      t.datetime :paid_at
      t.integer :payment_status

      t.timestamps
    end
  end
end
