import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sousmarin"
export default class extends Controller {
  static targets = ["render"]
  connect() {
    console.log(this.element)
  }

  anime(event) {
    console.log("anime")
    this.renderTarget.classList.toggle("tinRightOut");
  }
}
