// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

alert("troquei")

window.addEventListener("load", () => {
    alert('página carregada');
    console.log("################# LOGANDO #################");
    //addEventToButton();
  });