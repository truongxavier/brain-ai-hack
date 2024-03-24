import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="sidebar"
export default class extends Controller {
  static values = {mini: Boolean}
  // static targets = [ "page" ]

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

  // select(event) {
  //   this.pageTargets.forEach((element) => {
  //     element.classList.remove("active")
  //   })
  //   event.currentTarget.classList.add("active")
  // }

}
