# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Prompt.destroy_all
Node.destroy_all
AiClass.destroy_all

# Node.create(title: "recherche", content: "essai recherche")
AiClass.create(name: "ChatGPT")
AiClass.create(name: "Dezgo")
AiClass.create(name: "MistralAi")
AiClass.create(name: "DeepAi")
