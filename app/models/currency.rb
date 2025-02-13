# == Schema Information
#
# Table name: currencies
#
#  id         :bigint           not null, primary key
#  name_en    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Currency < ApplicationRecord
end
