class CreateArtistBankAccounts < ActiveRecord::Migration[8.0]
  def change
    create_table :artist_bank_accounts do |t|
      t.references :artist, null: false, foreign_key: true
      t.references :currency, null: false, foreign_key: true
      t.string :account_name
      t.string :bank_name
      t.string :bank_code
      t.string :branch
      t.string :account_number
      t.string :SWIFT_code
      t.string :IBAN_code
      t.string :address

      t.timestamps
    end
  end
end
