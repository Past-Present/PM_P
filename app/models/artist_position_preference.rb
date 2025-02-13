# == Schema Information
#
# Table name: artist_position_preferences
#
#  id           :bigint           not null, primary key
#  prefer_type  :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  artist_id    :bigint           not null
#  work_item_id :bigint           not null
#
# Indexes
#
#  index_artist_position_preferences_on_artist_id     (artist_id)
#  index_artist_position_preferences_on_work_item_id  (work_item_id)
#
# Foreign Keys
#
#  fk_rails_...  (artist_id => artists.id)
#  fk_rails_...  (work_item_id => work_items.id)
#
class ArtistPositionPreference < ApplicationRecord
  belongs_to :artist
  belongs_to :work_item

  enum prefer_type: { interested: 0, suggested: 1 }
end
