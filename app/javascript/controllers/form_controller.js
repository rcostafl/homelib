import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  
  static targets  = ["formtag","titletag", "searchList"]

  connect(event) {
    removeMarginFromFromInputs()
    //document.addEventListener("click", hideSearchOnClickOut)
    
  }
  
  selectItem(event){
    console.log("inside selectItem")

    event.preventDefault()

    const title_inp = document.getElementById("movie_title")
    title_inp.value = event.srcElement.value

    hideSearchList()

  }

  router(event){
    if(event.keyCode == 13){ // if enter pressed
      console.log("selecting item")
      this.selectItem(event)
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

    // Adding to the document the listener wich function checks for a click outside the search_list and closes it.
    document.addEventListener("click", hideSearchOnClickOut)
    
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
}



const removeMarginFromFromInputs = () => {
   
      document.querySelectorAll("label").forEach((element) => {
          element.parentElement.classList.remove("mb-3")
      })
  
}

const hideSearchList = () => {
  const search_list = document.getElementById("search_list")
  if(search_list.classList.contains("search_list_shown")){
    search_list.classList.remove("search_list_shown")
    search_list.classList.add("search_list_hidden")
    
    // Removing from the document the listener wich function checks for a click outside the search_list and closes it.
    document.removeEventListener('click', hideSearchOnClickOut)
  }
}

const hideSearchOnClickOut = (event) => {
  // Testing if the click was out of the search_list
  if (
    event.target.parentElement == null ||
    ( 
        event.target.id               != "search_list"  &&
        event.target.id               != "movie_title"  &&
        event.target.parentElement.id != "search_list"
    )
  ){
    // hiding search list
    hideSearchList()
  }
}
