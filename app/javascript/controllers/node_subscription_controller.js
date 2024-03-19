import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

// Connects to data-controller="node-subscription"
export default class extends Controller {
  static values = { nodeId: Number }
  static targets = ["prompts"]

  connect() {
    console.log(this.element)
    console.log(`Subscribed to the chatroom with the id ${this.nodeIdValue}.`)
    this.channel = createConsumer().subscriptions.create(
      { channel: "NodeChannel", id: this.nodeIdValue },
      { received: data => this.#insertPromptAndScrollDown(data) }
    )
  }

  resetForm(event) {
    event.target.reset()
  }

  disconnect() {
    console.log("Unsubscribed from the node")
    this.channel.unsubscribe()
  }

  #insertPromptAndScrollDown(data) {
    this.promptsTarget.insertAdjacentHTML("beforeend", data)
    this.promptsTarget.scrollTo(0, this.promptsTarget.scrollHeight)
  }

}
