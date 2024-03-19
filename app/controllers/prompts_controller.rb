class PromptsController < ApplicationController
  def create
    @node = Node.find(params[:node_id])
    @prompt = Prompt.new(prompt_params)
    @prompt.node = @node
    @prompt.ai_class_id = 4
    @node.title = params[:prompt]
    @node.save
    @prompt.response_text = 'réponse ia 1'
    if @prompt.save!
      NodeChannel.broadcast_to(
        @node,
        render_to_string(partial: "prompt", locals: {prompt: @prompt})
      )
      head :ok
    else
      render "nodes/show", status: :unprocessable_entity
    end

    @prompt = Prompt.new(prompt_params)
    @prompt.node = @node
    @prompt.ai_class_id = 4
    @prompt.response_text = 'réponse ia 2'
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

  private

  def prompt_params
    params.require(:prompt).permit(:prompt)
  end
end
