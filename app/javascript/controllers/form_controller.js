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

  router(event){
    if(event.keyCode == 13){ // if enter pressed
      selectItem(event)      //select item
    }else if (event.keyCode == 27){ // if esc pressed
      hideSearchList(event)         // hide search list
    }else if (event.keyCode == 9){ // if tab pressed
      hideSearchList(event)
      
    }
  }

  hideSearchList(event){
    
    const search_list_el = document.getElementById("search_list")
    search_list.classList.remove("search_list_shown")
    search_list.classList.add("search_list_hidden")
    
  }

  showSearchList(event) {
    console.log(event)
    
    const search_list_el = document.getElementById("search_list")
    const movie_title_input = event.srcElement

    if (movie_title_input.value.length > 2){
      search_list_el.innerHTML = ""
      // Search movie  
      fetch(`http://www.omdbapi.com/?s=${movie_title_input.value}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {

        if(data.Response == 'True'){
          search_list.classList.remove("search_list_hidden")
          search_list.classList.add("search_list_shown")

          data.Search.forEach((movie) => {
              
              let option_el = document.createElement("option")
              option_el.innerHTML = movie.Title
              option_el.setAttribute("value", movie.Title)
              search_list_el.appendChild(option_el)
              
          })
        }
    
      })      

    }else{
      hideSearchList()
    }


  }  

  goToSearchList(event){
    //check if search list is visible
    const search_list_el = document.getElementById("search_list")
    
    if (search_list_el.classList.contains("search_list_shown")){
      event.preventDefault()
      search_list_el.focus()

      search_list_el.value = search_list_el.firstChild.text

    }

  }

  selectItem(event){

    event.preventDefault()

    const title_inp = document.getElementById("movie_title")
    title_inp.value = event.srcElement.value

    hideSearchList()

  }

}



const removeMarginFromFromInputs = () => {
   
      document.querySelectorAll("label").forEach((element) => {
          element.parentElement.classList.remove("mb-3")
      })
  
}

const hideSearchList = () => {
  const search_list = document.getElementById("search_list")
  search_list.classList.remove("search_list_shown")
  search_list.classList.add("search_list_hidden")
}
