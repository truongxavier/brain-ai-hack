class PromptsController < ApplicationController
  def create
    @node = Node.find(params[:node_id])
    @prompt = Prompt.new(prompt_params)
    @prompt.node = @node
    if @prompt.save!
      redirect_to node_path(@node)
    else
      render "nodes/show", status: :unprocessable_entity
    end
  end
end
