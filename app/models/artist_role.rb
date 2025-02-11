class ArtistRole < ApplicationRecord
  belongs_to :work_item
  belongs_to :artist
  belongs_to :project
end
