//Mettre le code JavaScript lié à la page photographer.html
// DOM
let photographer = document.querySelector(".photographer") 

function photographerPage (){
    if(photographers.id === 243){
        document.location.href = "/photographer.html"
    }
}
photographer.addEventListener("click",photographerPage)