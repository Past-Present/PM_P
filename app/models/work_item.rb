# == Schema Information
#
# Table name: work_items
#
#  id         :bigint           not null, primary key
#  budget     :money
#  is_show    :boolean
#  name_en    :string
#  name_tw    :string
#  sorting    :integer
#  unit       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class WorkItem < ApplicationRecord
  has_one :task

  has_many :artist_roles, dependent: :destroy
  has_many :artist_position_preferences, dependent: :destroy
  has_many :gantt_tasks, dependent: :destroy
  has_many :difficulty_prices, dependent: :destroy

  enum unit: { drawing: 0, second: 1, frame: 2 }
end
