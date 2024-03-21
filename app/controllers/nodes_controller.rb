class NodesController < ApplicationController
  before_action :set_node, only: %i[show destroy update]
  def index
    @nodes = Node.all
    @node = Node.new
    @visnode = []
    @visedge = []
    @nodes.each do |node|
      @visnode.push({ id: node.id, label: node.title })
      node.prompts.each do |prompt|
        @visnode.push({ id: prompt.id,
                        label: "#{prompt.ai_class.name} répond #{prompt.response_text.slice(0,100)}",
                        title: prompt.response_text})
        @visedge.push({from: node.id, to: prompt.id})
      end
    end
  end

  def create
    @node = Node.new(node_params)
    @node.user = current_user
     if @node.save!
       redirect_to node_path(@node)
     else
       render :index, status: :unprocessable_entity
     end
  end

  def show
    @prompt = Prompt.new
    @nodenew = Node.new
  end

  def destroy
    @node.destroy
    redirect_to nodes_path
  end

  def update
    if @node.update(node_params)
      redirect_to nodes_path
    else
      render :index, status: :unprocessable_entity
    end
  end

  private

  def set_node
    @node = Node.find(params[:id])
  end

  def node_params
    params.require(:node).permit(:title, :content)
  end
end
