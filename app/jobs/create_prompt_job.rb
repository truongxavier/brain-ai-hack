require 'open-uri'
require_relative '../models/prompt'
require_relative '../channels/node_channel'

class CreatePromptJob < ApplicationJob
  queue_as :default

  def perform(job_params)
    controller = ActionController::Base.new()
    puts job_params[:prompt_text]
    puts job_params[:name_ai]
    puts job_params[:choix]
    puts job_params[:node]
    @prompt = Prompt.new(job_params[:job_prompt_params])
    @node = job_params[:node]
    prepare_prompt(job_params[:name_ai])
    node_title_save(job_params[:prompt_text])
    puts job_params[:choix]
    if job_params[:choix] == "texte"
      prepare_response_text(job_params[:prompt_text], job_params[:name_ai])
    else
      prepare_response_image(job_params[:prompt_text], job_params[:name_ai])
    end
    prompt_save_and_broadcast(controller)
  end

  private

  def prepare_prompt(name_ai)
    @prompt.node = @node
    @prompt.ai_class = AiClass.find_by(name: name_ai)
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

  def prompt_save_and_broadcast(controller)
    if @prompt.save!
      html_string = controller.render_to_string(partial: "prompts/prompt", locals: { prompt: @prompt })
      puts html_string
      puts @node.id
      # binding.pry
      NodeChannel.broadcast_to(
        @node,
        html_string
      )
    end
  end
end
