class Prompt < ApplicationRecord
  belongs_to :node
  belongs_to :ai_class
end
