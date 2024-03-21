class NodesController < ApplicationController
  before_action :set_node, only: %i[show destroy update]
  def index
    @nodes = Node.all
    @node = Node.new
    @visnode = []
    @visedge = []
    @nodes.each do |node|
      @visnode.push({ id: node.id,
                      label: node.title.gsub(/(.{1,50})/, "\\1\n").chomp,
                      shape: "box" })
      node.prompts.each do |prompt|
        if prompt.response_text
          @visnode.push({ id: prompt.id,
                          label: "#{prompt.ai_class.name} répond #{prompt.response_text.slice(0, 100)}".gsub(/(.{1,50})/, "\\1\n").chomp,
                          title: prompt.response_text,
                          shape: "ellipse" })
        else
          @visnode.push({ id: prompt.id,
                          label: "#{prompt.ai_class.name} répond par une image",
                          image: "https://res.cloudinary.com/dk7qaea1j/image/upload/v1711038177/development/#{prompt.response_image.key}.png",
                          shape: "image" })
        end
        @visedge.push({ from: node.id, to: prompt.id })
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
