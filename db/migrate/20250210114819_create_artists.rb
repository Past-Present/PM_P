class CreateArtists < ActiveRecord::Migration[8.0]
  def change
    create_table :artists do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name_en
      t.string :name_tw
      t.string :email
      t.string :discord
      t.string :instagram
      t.string :credit_name
      t.string :address
      t.string :username
      t.string :password_hash

      t.timestamps
    end
  end
end
