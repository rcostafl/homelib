// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

var Turbolinks = require("turbolinks")
Turbolinks.start()

const removeMargin = () => {
    null;
}

const removeMarginFromFromInputs = () => {
    
    const moviePage = document.getElementById("movie_form_page");

    if (!(moviePage == null)) {
        alert("encontrei ")
        document.querySelectorAll("label").forEach((element) => {
            element.parentElement.classList.remove("mb-3")
        })
    }else {
        alert("não encontrei")
    }
    //moviePage.addEventListener('DOMContentLoaded', (event) => {alert('carregando')});
    //alert("cheguei");
    
}

import hello from "../javascript/hello";

document.addEventListener("turbolinks:render", () => {
  }
);

document.addEventListener("turbolinks:load", () => {

});

document.addEventListener("turbolinks:visit", () => {
    alert("turbolinks:visit");
});
