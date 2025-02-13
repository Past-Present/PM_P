# == Schema Information
#
# Table name: difficulty_prices
#
#  id               :bigint           not null, primary key
#  difficulty_level :integer
#  price            :decimal(10, 2)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  work_item_id     :bigint           not null
#
# Indexes
#
#  index_difficulty_prices_on_work_item_id  (work_item_id)
#
# Foreign Keys
#
#  fk_rails_...  (work_item_id => work_items.id)
#
class DifficultyPrice < ApplicationRecord
  belongs_to :work_item
end
