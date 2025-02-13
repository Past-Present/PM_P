# == Schema Information
#
# Table name: artists
#
#  id            :bigint           not null, primary key
#  address       :string
#  credit_name   :string
#  discord       :string
#  email         :string
#  instagram     :string
#  name_en       :string
#  name_tw       :string
#  password_hash :string
#  username      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :bigint           not null
#
# Indexes
#
#  index_artists_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Artist < ApplicationRecord
  belongs_to :user

  has_many :artist_roles, dependent: :destroy
  has_many :projects, through: :artist_roles
  has_many :artist_position_preferences, dependent: :destroy
  has_many :tasks, dependent: :destroy
  has_many :artist_bank_accounts, dependent: :destroy
end
