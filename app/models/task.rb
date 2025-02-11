class Task < ApplicationRecord
  belongs_to :work_item
  belongs_to :artist
end
