# == Schema Information
#
# Table name: shots
#
#  id          :bigint           not null, primary key
#  deadline    :datetime
#  difficulty  :integer
#  frames      :integer
#  notes       :text
#  preview_url :string
#  priority    :integer
#  shot_number :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  tag_id      :bigint           not null
#  task_id     :bigint           not null
#
# Indexes
#
#  index_shots_on_tag_id   (tag_id)
#  index_shots_on_task_id  (task_id)
#
# Foreign Keys
#
#  fk_rails_...  (tag_id => tags.id)
#  fk_rails_...  (task_id => tasks.id)
#
class Shot < ApplicationRecord
  belongs_to :task
  belongs_to :tag
end
