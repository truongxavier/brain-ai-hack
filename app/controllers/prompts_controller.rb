require 'open-uri'

class PromptsController < ApplicationController
  def create
    list_ia = params[:prompt][:non_model_field][:list_ia]
    choix = params[:prompt][:non_model_field][:choix]
    prompt_text = params[:prompt][:prompt]
    @node = Node.find(params[:node_id])
    if choix == "texte"
      traite_text(list_ia, prompt_text)
    else
      traite_image(list_ia, prompt_text)
    end
  end

  private

  def traite_text(list_ia, prompt_text)
    list_ia.each do |name_ai|
      next if name_ai == ""

      prepare_prompt(name_ai)
      node_title_save(prompt_text)
      prepare_response_text(prompt_text, name_ai)
      prompt_save_and_broadcast
    end
  end

  def traite_image(list_ia, prompt_text)
    list_ia.each do |name_ai|
      next if name_ai == ""

      prepare_prompt(name_ai)
      node_title_save(prompt_text)
      prepare_response_image(prompt_text, name_ai)
      prompt_save_and_broadcast
    end
  end

  def prompt_params
    params.require(:prompt).permit(:prompt)
  end

  def prepare_prompt(name_ai)
    @prompt = Prompt.new(prompt_params)
    @prompt.node = @node
    @prompt.ai_class = AiClass.find_by(name: name_ai)
  end

  def prompt_save_and_broadcast
    if @prompt.save!
      NodeChannel.broadcast_to(
        @node,
        render_to_string(partial: "prompt", locals: { prompt: @prompt })
      )
      head :ok
    else
      render "nodes/show", status: :unprocessable_entity
    end
  end

  def node_title_save(prompt_text)
    return unless @node.title == ""

    @node.title = prompt_text
    @node.save
  end

  def prepare_response_text(prompt_text, name_ai)
    case name_ai
    when "ChatGPT"
      @prompt.response_text = call_chatgpt_result_text(prompt_text)
    when "MistralAi"
      @prompt.response_text = call_mistralai_result_text(prompt_text)
    end
  end

  def prepare_response_image(prompt_text, name_ai)
    case name_ai
    when "ChatGPT"
      prepare_image_for_chatgpt(prompt_text)
    when "Dezgo"
      prepare_image_for_dezgo(prompt_text)
    when "DeepAi"
      prepare_image_for_deepai(prompt_text)
    end
  end

  def garder_les_n_mots(chaine, number)
    chaine.split.take(number).join(' ')
  end

  def prepare_image_for_chatgpt(prompt_text)
    file = URI.open(call_chatgpt_result_image(prompt_text))
    @prompt.response_image.attach(
      io: file,
      filename: "#{garder_les_n_mots(prompt_text, 10).gsub(' ', '')}.png",
      content_type: "image/png"
    )
  end

  def prepare_image_for_dezgo(prompt_text)
    data_image = call_dezgo_result_image(prompt_text)
    @prompt.response_image.attach(
      io: StringIO.new(data_image),
      filename: "#{garder_les_n_mots(prompt_text, 10).gsub(' ', '')}.jpg",
      content_type: 'image/jpeg'
    )
  end

  def prepare_image_for_deepai(prompt_text)
    file = URI.open(call_deepai_result_image(prompt_text))
    @prompt.response_image.attach(
      io: file,
      filename: "#{garder_les_n_mots(prompt_text, 10).gsub(' ', '')}.png",
      content_type: "image/png"
    )
  end
end
