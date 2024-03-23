import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

// Connects to data-controller="node-subscription"
export default class extends Controller {
  static values = { nodeId: Number }
  static targets = ["prompts", "patience", "zone"]

  connect() {
    console.log(this.element)
    console.log(`Subscribed to the chatroom with the id ${this.nodeIdValue}.`)
    this.channel = createConsumer().subscriptions.create(
      { channel: "NodeChannel", id: this.nodeIdValue },
      { received: data => this.#insertPromptAndScrollDown(data) }
    )
    this.zoneTarget.addEventListener('input', this.resize)
  }

  resetForm(event) {
    this.patienceTarget.classList.add("d-none")
    this.patienceTarget.classList.remove("tinRightOut")
    event.target.reset()
  }

  research(event) {
    this.patienceTarget.classList.remove("d-none")
    this.patienceTarget.classList.add("tinRightOut")
    this.#donw()
  }

  resize = () => {
    this.zoneTarget.style.height = 'auto'
    this.zoneTarget.style.height = `${this.zoneTarget.scrollHeight}px`
    this.#donw()
  }

  disconnect() {
    console.log("Unsubscribed from the node")
    this.channel.unsubscribe()
    this.zoneTarget.removeEventListener('input', this.resize)
  }

  #insertPromptAndScrollDown(data) {
    this.promptsTarget.insertAdjacentHTML("beforeend", data)
    this.#donw()
    // window.scrollTo(0, document.body.scrollHeight)
  }

  #donw() {
    window.scrollTo(0, 20000)
  }
}
