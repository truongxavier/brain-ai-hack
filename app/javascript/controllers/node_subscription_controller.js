import { Controller } from "@hotwired/stimulus"
import { createConsumer } from "@rails/actioncable"

// Connects to data-controller="node-subscription"
export default class extends Controller {
  static values = { nodeId: Number }
  static targets = ["prompts", "patience", "zone","promptp"]

  connect() {
    console.log(this.element)
    console.log(`Subscribed to the chatroom with the id ${this.nodeIdValue}.`)
    this.channel = createConsumer().subscriptions.create(
      { channel: "NodeChannel", id: this.nodeIdValue },
      { received: data => this.#insertPromptAndScrollDown(data) }
    )
    this.zoneTarget.addEventListener('input', this.resize)
    this.#donw()
  }

  resetForm(event) {
    this.patienceTarget.classList.add("d-none")
    this.patienceTarget.classList.remove("tinRightOut")
    this.promptsTarget.classList.add("cards-padding")
    event.target.reset()
  }

  research(event) {
    this.patienceTarget.classList.remove("d-none")
    this.patienceTarget.classList.add("tinRightOut")
    this.promptsTarget.classList.remove("cards-padding")
    this.#donw()
  }

  resize = () => {
    this.zoneTarget.style.height = 'auto'
    this.zoneTarget.style.height = `${this.zoneTarget.scrollHeight}px`
    this.#donw()
  }

  copy(event) {
    var textId = event.currentTarget.dataset.textId
    console.log(textId)
    var textElement = this.promptpTargets.find(element => element.id === textId)
    console.log(textElement)

    /* Sélectionnez le texte */
    var range = document.createRange();
    range.selectNode(textElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    /* Copiez le texte */
    document.execCommand("copy");
  }

  disconnect() {
    console.log("Unsubscribed from the node")
    this.channel.unsubscribe()
    this.zoneTarget.removeEventListener('input', this.resize)
  }

  #insertPromptAndScrollDown(data) {
    this.promptsTarget.insertAdjacentHTML("beforeend", data)
    this.#donw()
  }

  #donw() {
    //window.scrollTo(0, 20000)
    window.scrollTo(0, document.body.scrollHeight)
  }
}
