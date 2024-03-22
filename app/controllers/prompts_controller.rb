require 'json'
require 'net/http'
require "open-uri"
require 'uri'
require 'rest_client'

class PromptsController < ApplicationController
  attr_accessor :list_ia, :choix

  def create

    if params[:prompt][:non_model_field][:choix] == "texte"
      params[:prompt][:non_model_field][:list_ia].each do |ianame|
        if ianame != ""
          @node = Node.find(params[:node_id])
          @prompt = Prompt.new(prompt_params)
          @prompt.node = @node
          @prompt.ai_class = AiClass.find_by(name: ianame)
          if @node.title == ""
            @node.title = params[:prompt][:prompt]
            @node.save
          end
          if ianame == "ChatGPT"
            @prompt.response_text = call_chatgpt_result_text(@prompt)
          else
            @prompt.response_text = call_mistralai_result_text(@prompt)
          end
          if @prompt.save!
            NodeChannel.broadcast_to(
              @node,
              render_to_string(partial: "prompt", locals: {prompt: @prompt})
            )
            head :ok
          else
            render "nodes/show", status: :unprocessable_entity
          end
        end
      end
    else
      params[:prompt][:non_model_field][:list_ia].each do |ianame|
        if ianame != ""
          @node = Node.find(params[:node_id])
          @prompt = Prompt.new(prompt_params)
          @prompt.node = @node
          @prompt.ai_class = AiClass.find_by(name: ianame)
          if @node.title == ""
            @node.title = params[:prompt][:prompt]
            @node.save
          end
          if ianame == "ChatGPT"
            file = URI.open(call_chatgpt_result_image(@prompt))
            @prompt.response_image.attach(io: file, filename: "#{params[:prompt][:prompt].gsub(' ','')}.png", content_type: "image/png")
            @prompt.save
          elseif ianame == "Dezgo"
            data_image = call_dezgo_result_image(@prompt)
            @prompt.response_image.attach(io: StringIO.new(data_image), filename: 'image.jpg', content_type: 'image/jpeg')
          else
            file = URI.open(call_deepai_result_image(@prompt))
            @prompt.response_image.attach(io: file, filename: "#{params[:prompt][:prompt].gsub(' ','')}.png", content_type: "image/png")
            @prompt.save
          end
          if @prompt.save!
            NodeChannel.broadcast_to(
              @node,
              render_to_string(partial: "prompt", locals: {prompt: @prompt})
            )
            head :ok
          else
            render "nodes/show", status: :unprocessable_entity
          end
        end
      end
    end
  end

  private

  def call_chatgpt_result_text(prompt)
    client = OpenAI::Client.new
    chaptgpt_response = client.chat(parameters: {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt.prompt.to_s }]
    })
    chaptgpt_response["choices"][0]["message"]["content"]
  end

  def call_chatgpt_result_image(prompt)
    client = OpenAI::Client.new
    response = client.images.generate(parameters: {
      model: "dall-e-3",
      prompt: prompt.prompt.to_s
    })
    response.dig("data", 0, "url")
  end

  def call_deepai_result_image(prompt)
    result = RestClient::Request.execute(method: :post, url: 'https://api.deepai.org/api/text2img', timeout: 600,
      headers: {
        'Content-Type': 'application/json',
        'api-key' => ENV['DEEPAI_API_KEY']},
      payload: {
          'text' => prompt.prompt,
      })
    response_json = JSON.parse(result.body)
    response_json["output_url"]
  end

  def call_mistralai_result_text(prompt)
    # Votre clé API Dezgo
    api_key = ENV['MISTRALAI_API_KEY']
    # Créer l'URI pour la requête API
    uri = URI("https://api.mistral.ai/v1/chat/completions")

    # Créer la requête HTTP
    request = Net::HTTP::Post.new(uri)
    request['Content-Type'] = 'application/json'
    request['Accept'] = 'application/json'
    request['Authorization'] = "Bearer #{api_key}"
    request.body = {
      model: 'mistral-tiny',
      messages: [{ role: 'user', content: prompt.prompt.to_s }]
    }.to_json

    # Envoyer la requête
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

  def call_dezgo_result_image(prompt)
    # Le modèle que vous voulez utiliser
    model = 'realistic_vision_5_1'

    # Créer l'URI pour la requête API
    uri = URI("https://api.dezgo.com/text2image_sdxl")

    # Créer la requête HTTP
    request = Net::HTTP::Post.new(uri)
    request['X-Dezgo-Key'] = ENV.fetch('DEZGO_API_KEY')
    request['Content-Type'] = 'application/json'
    request.body = { prompt: prompt.prompt }.to_json

    # Envoyer la requête
    response = Net::HTTP.start(uri.hostname, uri.port, :use_ssl => uri.scheme == 'https') do |http|
      http.request(request)
    end
    # Vérifier le statut de la réponse
    if response.code == '200'
      response.body
    else
      puts "Erreur lors de la création de l'image: #{response.body}"
    end
  end

  def prompt_params
    params.require(:prompt).permit(:prompt)
  end
end
