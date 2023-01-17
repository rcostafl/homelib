import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  
  static targets  = ["formtag","titletag", "searchList"]

  connect(event) {
    removeMarginFromFromInputs()
    //console.log(this.element)
    //console.log(this.itemsTarget)
    //console.log(this.formTarget)
    //console.log("entrei")
    //console.log(this.element.action)
    //console.log(this.formtagTarget)
    //console.log(this.titletagTarget)
    
  }

  showSearchList(event) {
    const search_list_el = document.getElementById("search_list")

    fetch('http://www.omdbapi.com/?s=godfather&apikey=adf1f2d7')
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        console.log(result.Title)
        let li_el = document.createElement("li")
        li_el.innerHTML = result.Title
        search_list_el.appendChild(li_el)
        
      })
    })
  }  
}

const removeMarginFromFromInputs = () => {
   
      document.querySelectorAll("label").forEach((element) => {
          element.parentElement.classList.remove("mb-3")
      })
  
}
