class ArtistBankAccount < ApplicationRecord
  belongs_to :artist
  belongs_to :currency
end
