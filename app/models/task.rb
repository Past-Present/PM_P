# == Schema Information
#
# Table name: tasks
#
#  id           :bigint           not null, primary key
#  frames       :integer
#  status       :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  artist_id    :bigint           not null
#  work_item_id :bigint           not null
#
# Indexes
#
#  index_tasks_on_artist_id     (artist_id)
#  index_tasks_on_work_item_id  (work_item_id)
#
# Foreign Keys
#
#  fk_rails_...  (artist_id => artists.id)
#  fk_rails_...  (work_item_id => work_items.id)
#
class Task < ApplicationRecord
  belongs_to :work_item
  belongs_to :artist

  has_many :shots, dependent: :destroy

  enum status: { preparing: 0, pending: 1, in_progress: 2, wait_for_approve: 3, retake: 4, completed: 5, paused: 6, mixed: 7, cancelled: 8 }
end
