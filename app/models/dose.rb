class Dose < ApplicationRecord
  belongs_to :cocktail
  belongs_to :ingredient

  #validations
  validates :description, presence: true
  validates :ingredient, uniqueness: { scope: :cocktail }
end
