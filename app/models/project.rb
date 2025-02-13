# == Schema Information
#
# Table name: projects
#
#  id                 :bigint           not null, primary key
#  budget             :money
#  end_date           :datetime
#  google_drive_token :string
#  name_en            :string
#  name_tw            :string
#  start_date         :datetime
#  status             :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  currency_id        :bigint           not null
#  user_id            :bigint           not null
#
# Indexes
#
#  index_projects_on_currency_id  (currency_id)
#  index_projects_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (currency_id => currencies.id)
#  fk_rails_...  (user_id => users.id)
#
class Project < ApplicationRecord
  belongs_to :user
  belongs_to :currency

  has_many :project_announcements, dependent: :destroy
  has_many :payments, dependent: :destroy
  has_many :gantt_tasks, dependent: :destroy
  has_many :artist_roles, dependent: :destroy

  enum status: { preparing: 0, pending: 1, in_progress: 2, completed: 3, paused: 4, cancelled: 5 }
end
