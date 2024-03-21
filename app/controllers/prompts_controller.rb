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
            file = URI.open(prompt_image_chat_gpt(@prompt))
            @prompt.response_image.attach(io: file, filename: "#{params[:prompt][:prompt].gsub(" ","")}.png", content_type: "image/png")
            @prompt.save
          else
            # Todo
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
      messages: [{ role: "user", content: "#{prompt.prompt}"}]
    })
    chaptgpt_response["choices"][0]["message"]["content"]
  end

  def prompt_image_chat_gpt(prompt)
    client = OpenAI::Client.new
    response = client.images.generate(parameters: {
      model: "dall-e-3",
      prompt: prompt.prompt })
    response.dig("data", 0, "url")
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
    request.body = { model: 'mistral-tiny',
                    messages: [{ "role": 'user', "content": "#{prompt.prompt}" }] }.to_json

    # Envoyer la requête
    response = Net::HTTP.start(uri.hostname, uri.port, :use_ssl => uri.scheme == 'https') do |http|
      http.request(request)
    end

    if response.code.to_i == 200
      # Analyser la réponse JSON
      response_json = JSON.parse(response.body)

      # Extraire le contenu du message
      content = response_json.dig("choices", 0, "message", "content")
    else
      puts "Erreur lors de l'appel à l'API : #{response.code} - #{response.message}"
    end
  end

  def prompt_params
    params.require(:prompt).permit(:prompt)
  end
end
