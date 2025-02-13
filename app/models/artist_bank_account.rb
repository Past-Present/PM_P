# == Schema Information
#
# Table name: artist_bank_accounts
#
#  id             :bigint           not null, primary key
#  IBAN_code      :string
#  SWIFT_code     :string
#  account_name   :string
#  account_number :string
#  address        :string
#  bank_code      :string
#  bank_name      :string
#  branch         :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  artist_id      :bigint           not null
#  currency_id    :bigint           not null
#
# Indexes
#
#  index_artist_bank_accounts_on_artist_id    (artist_id)
#  index_artist_bank_accounts_on_currency_id  (currency_id)
#
# Foreign Keys
#
#  fk_rails_...  (artist_id => artists.id)
#  fk_rails_...  (currency_id => currencies.id)
#
class ArtistBankAccount < ApplicationRecord
  belongs_to :artist
  belongs_to :currency
end
