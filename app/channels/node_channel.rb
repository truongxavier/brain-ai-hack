class NodeChannel < ApplicationCable::Channel
  def subscribed
    node = Node.find(params[:id])
    stream_for node
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
