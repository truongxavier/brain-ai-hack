import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sidebar"
export default class extends Controller {
  static values = {mini: Boolean, controller: String, action: String}
  static targets = [ "btn", "sbm" ]

  toggleSidebar() {
    this.miniValue = !this.miniValue
    if (this.miniValue) {
      console.log("opening sidebar");
      this.element.style.width = "250px";
      this.element.parentElement.style.marginLeft = "255px";
    } else {
      console.log("closing sidebar");
      this.element.style.width = "80px";
      this.element.parentElement.style.marginLeft = "85px";
    };
  };
  changeColor() {
    console.log(this.controllerValue)
    console.log(this.actionValue)
    if (this.controllerValue == "nodes" && this.actionValue == "index") {
      this.btnTarget.classList.add("active");
      this.btnTarget.classList.add("sidebare-button");
      this.sbmTarget.classList.remove("active");
      this.sbmTarget.classList.remove("sidebare-button");
    } else {
      this.btnTarget.classList.remove("active");
      this.btnTarget.classList.remove("sidebare-button");
      this.sbmTarget.classList.add("active");
      this.sbmTarget.classList.add("sidebare-button");
    }
  }
}
