import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  
  static targets = ["items", "form"]

  connect(event) {
    //removeMarginFromFromInputs()
    //console.log(this.element)
    //console.log(this.itemsTarget)
    //console.log(this.formTarget)
    console.log("entrei")
  }

  showSearchList(event) {
    alert('showSearchList')
  }  
}

const removeMarginFromFromInputs = () => {
   
      document.querySelectorAll("label").forEach((element) => {
          element.parentElement.classList.remove("mb-3")
      })
  
}
