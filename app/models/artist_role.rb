# == Schema Information
#
# Table name: artist_roles
#
#  id           :bigint           not null, primary key
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  artist_id    :bigint           not null
#  project_id   :bigint           not null
#  work_item_id :bigint           not null
#
# Indexes
#
#  index_artist_roles_on_artist_id     (artist_id)
#  index_artist_roles_on_project_id    (project_id)
#  index_artist_roles_on_work_item_id  (work_item_id)
#
# Foreign Keys
#
#  fk_rails_...  (artist_id => artists.id)
#  fk_rails_...  (project_id => projects.id)
#  fk_rails_...  (work_item_id => work_items.id)
#
class ArtistRole < ApplicationRecord
  belongs_to :work_item
  belongs_to :artist
  belongs_to :project
end
