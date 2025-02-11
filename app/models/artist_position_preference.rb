class ArtistPositionPreference < ApplicationRecord
  belongs_to :artist
  belongs_to :work_item
end
