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

  hideSearchList(event){
    
    const search_list_el = document.getElementById("search_list")
    search_list.classList.remove("search_list_shown")
    search_list.classList.add("search_list_hidden")
    
  }

  showSearchList(event) {
    
    const search_list_el = document.getElementById("search_list")
    const movie_title_input = event.srcElement

    if (movie_title_input.value.length > 2){

      search_list.classList.remove("search_list_hidden")
      search_list.classList.add("search_list_shown")

      // Search movie  
      fetch('http://www.omdbapi.com/?s=godfather&apikey=adf1f2d7')
      .then(response => response.json())
      .then((data) => {
        data.Search.forEach((movie) => {
            
            let option_el = document.createElement("option")
            option_el.innerHTML = movie.Title
            option_el.setAttribute("value", movie.Title)
            search_list_el.appendChild(option_el)
            
        })
    
      })      

    }else{
      search_list.classList.remove("search_list_shown")
      search_list.classList.add("search_list_hidden")
    }


  }  
}

const removeMarginFromFromInputs = () => {
   
      document.querySelectorAll("label").forEach((element) => {
          element.parentElement.classList.remove("mb-3")
      })
  
}
