# == Schema Information
#
# Table name: gantt_tasks
#
#  id           :bigint           not null, primary key
#  end_date     :datetime
#  progress     :decimal(5, 2)
#  start_date   :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  project_id   :bigint           not null
#  work_item_id :bigint           not null
#
# Indexes
#
#  index_gantt_tasks_on_project_id    (project_id)
#  index_gantt_tasks_on_work_item_id  (work_item_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#  fk_rails_...  (work_item_id => work_items.id)
#
class GanttTask < ApplicationRecord
  belongs_to :work_item
  belongs_to :project
end
