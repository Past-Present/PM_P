# == Schema Information
#
# Table name: payments
#
#  id             :bigint           not null, primary key
#  paid_at        :datetime
#  payment_status :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  project_id     :bigint           not null
#
# Indexes
#
#  index_payments_on_project_id  (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#
class Payment < ApplicationRecord
  belongs_to :project
end
