import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroll-prompt"
export default class extends Controller {
  static targets = ["input", "response","insert"]

  // connect () {
  //   document.body.scrollTo(0, document.body.scrollHeight)
  // }
  // scroll() {
  //   // this.insertTarget.insertAdajcentHTML("beforeend", this.responseTarget)
  //   // this.insertTarget.scrollTo(0, this.insertTarget.scrollHeight)
  //   // document.body.scrollTo(0, document.body.scrollHeight)
  // }
}
