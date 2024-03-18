class NodesController < ApplicationController
  before_action :set_node, only: %i[show destroy update]
  def index
    @nodes = Node.all
    @node = Node.new
  end

  def create
    @node = Node.new(node_params)
     if @node.save!
      redirect_to nodes_path
     else
      render :index, status: :unprocessable_entity
     end
  end

  def show
    @prompt = Prompt.new
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
