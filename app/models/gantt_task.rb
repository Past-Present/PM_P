class GanttTask < ApplicationRecord
  belongs_to :work_item
  belongs_to :project
end
