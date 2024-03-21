class Prompt < ApplicationRecord
  belongs_to :node
  belongs_to :ai_class
  has_one_attached :response_image
end
