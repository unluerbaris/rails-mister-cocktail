class Ingredient < ApplicationRecord
  has_many :doses
  has_many :cocktails, through: :doses

  #validations
  validates :name, presence: true, uniqueness: true

  #always capitalize the name
  def to_label
    name.capitalize
  end
end
