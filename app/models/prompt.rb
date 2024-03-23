require 'json'
require 'net/http'
require 'uri'
require 'rest_client'
require 'openai'

class Prompt < ApplicationRecord
  belongs_to :node
  belongs_to :ai_class
  has_one_attached :response_image
end

def call_chatgpt_result_text(prompt)
  client = OpenAI::Client.new
  chaptgpt_response = client.chat(
    parameters: {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    }
  )
  chaptgpt_response["choices"][0]["message"]["content"]
end

def call_chatgpt_result_image(prompt)
  client = OpenAI::Client.new
  response = client.images.generate(
    parameters: {
      model: "dall-e-3",
      prompt: prompt
    }
  )
  response.dig("data", 0, "url")
end

def call_deepai_result_image(prompt)
  result = execute_deepai_request(prompt)
  response_json = JSON.parse(result.body)
  response_json["output_url"]
end

def call_mistralai_result_text(prompt)
  request = build_mistralai_request(prompt)
  send_mistralai_request(request)
end

def call_dezgo_result_image(prompt)
  request = build_dezgo_request(prompt)
  send_dezgo_request(request)
end

private

def build_dezgo_request(prompt)
  request = Net::HTTP::Post.new(URI("https://api.dezgo.com/text2image_sdxl"))
  request['X-Dezgo-Key'] = ENV.fetch('DEZGO_API_KEY')
  request['Content-Type'] = 'application/json'
  request.body = { prompt: prompt }.to_json
  request
end

def send_dezgo_request(request)
  uri = URI("https://api.dezgo.com/text2image_sdxl")
  response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
    http.request(request)
  end
  # Vérifier le statut de la réponse
  if response.code == '200'
    response.body
  else
    puts "Erreur lors de la création de l'image: #{response.body}"
  end
end

def build_mistralai_request(prompt)
  uri = URI("https://api.mistral.ai/v1/chat/completions")
  request = Net::HTTP::Post.new(uri)
  request['Content-Type'] = 'application/json'
  request['Accept'] = 'application/json'
  request['Authorization'] = "Bearer #{ENV.fetch('MISTRALAI_API_KEY')}"
  request.body = {
    model: 'mistral-tiny',
    messages: [{ role: 'user', content: prompt }]
  }.to_json
  request
end

def send_mistralai_request(request)
  uri = URI("https://api.mistral.ai/v1/chat/completions")
  response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: uri.scheme == 'https') do |http|
    http.request(request)
  end
  if response.code.to_i == 200
    # Analyser la réponse JSON
    response_json = JSON.parse(response.body)
    # Extraire le contenu du message
    response_json.dig("choices", 0, "message", "content")
  else
    puts "Erreur lors de l'appel à l'API : #{response.code} - #{response.message}"
  end
end

def execute_deepai_request(text)
  RestClient::Request.execute(
    method: :post,
    url: 'https://api.deepai.org/api/text2img',
    timeout: 600,
    headers: {
      'Content-Type': 'application/json',
      'api-key' => ENV.fetch('DEEPAI_API_KEY')
    },
    payload: { 'text' => text }
  )
end
