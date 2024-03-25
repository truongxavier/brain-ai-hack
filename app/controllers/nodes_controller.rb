class NodesController < ApplicationController
  before_action :set_node, only: %i[show destroy update]
  def index
    @nodes = Node.all
    @node = Node.new
    @visnode = []
    @visedge = []
    if params[:query].present?
      search = "title ILIKE :query"
      @nodes = @nodes.where(search, query: "%#{params[:query]}%")
    end
    return if @nodes.empty?
    construct_vis_data
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

  def construct_node_for_vise(node)
    @visnode.push({
                    id: node.id,
                    label: ajouter_saut_ligne_tous_les_n_mots(garder_les_n_mots(node.title, 15), 5),
                    title: ajouter_saut_ligne_tous_les_n_mots(node.title, 20),
                    shape: "box",
                    level: 0
                  }
                )
  end

  def construct_prompt_text_for_vise(prompt)
    @visnode.push({
                    id: prompt.id,
                    label: "#{prompt.ai_class.name} répond \n #{ajouter_saut_ligne_tous_les_n_mots(garder_les_n_mots(prompt.response_text, 15), 5)}",
                    title: prompt.response_text,
                    shape: "ellipse",
                    font: '12px',
                    level: 3})
  end

  def construct_prompt_image_for_vise(prompt)
    @visnode.push({
                    id: prompt.id,
                    label: "#{prompt.ai_class.name} répond à \n #{ajouter_saut_ligne_tous_les_n_mots(garder_les_n_mots(prompt.prompt, 15), 5)}",
                    image: "#{ENV.fetch('CLOUDINARY_LINK')}#{prompt.response_image.key}.png",
                    shape: "image",
                    size: 100,
                    font: '12px',
                    title: ajouter_saut_ligne_tous_les_n_mots(prompt.prompt, 20),
                    level: 3})
  end

  def construct_vis_data
    @nodes.each do |node|
      construct_node_for_vise(node)
      node.prompts.each do |prompt|
        if prompt.response_text
          construct_prompt_text_for_vise(prompt)
        else
          construct_prompt_image_for_vise(prompt)
        end
        @visedge.push({ from: node.id, to: prompt.id })
      end
    end
  end

  def set_node
    @node = Node.find(params[:id])
  end

  def node_params
    params.require(:node).permit(:title, :content)
  end

  def ajouter_saut_ligne_tous_les_n_mots(chaine, number)
    mots = chaine.split(' ')
    mots.each_slice(number).map { |slice| slice.join(' ') }.join("\n")
  end

  def garder_les_n_mots(chaine, number)
    chaine.split.take(number).join(' ')
  end
end
