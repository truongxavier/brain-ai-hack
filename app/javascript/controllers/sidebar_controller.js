import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sidebar"
export default class extends Controller {
  static values = {mini: Boolean}

  connect () {
    console.log(this.element)
  }
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
  mouse (event) {
    console.log(event)
    console.log(this.element)
  }
}
