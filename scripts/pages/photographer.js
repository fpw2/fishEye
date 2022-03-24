/* Recuperation de l'id Photographer dans l'url */ 
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const idPhotographer = urlParams.get("id")

class PhotographerPage {
    constructor() {
        this.photographerApi = new Api('/data/photographers.json')
    }
    async main() {
        // DOM
        const $photographerSection = document.querySelector(".photograph-section")
        const $photographerPicture = document.querySelector(".photograph-picture")
        const $photographerMedia = document.querySelector(".photograph-media")
        let $like = document.querySelector(".like")
        const $mark = document.querySelector(".mark")
        let $select = document.querySelector('#select');

        // DONNEES API 
        const photographersData = await this.photographerApi.getPhotographer()
        const mediasData = await this.photographerApi.getPhotographerMedia()
        
        // HTML HEADER PHOTOGRAPHER 
        const photographerTemplate = new PhotographerTemplate(photographersData)
        $photographerSection.innerHTML = photographerTemplate.createPhotographerPage()[0]
        $photographerPicture.innerHTML = photographerTemplate.createPhotographerPage()[1]

        // function incrementLikes(media) {
        //     return media.likes = media.likes + 1
        // }
        // $like.forEach((click) => click.addEventListener("click",incrementLikes(mediasData))

        // HTML MEDIA
        const displayMedia = (medias) => {

            let totalLikes = 0 // initialisation à zéro
            $photographerMedia.innerHTML = "" // j'efface le contenu à chaque changement 

            medias.map((media,index) => {
                // ajout d'un clé : totalLikes dans medias, valeur : media.totalLikes
                totalLikes += media.likes
                media.totalLikes = totalLikes
                //console.log("totalLike",media.totalLikes)
                
                const photographerTemplate = new PhotographerTemplate(photographersData, media)
                $photographerMedia.innerHTML += photographerTemplate.createPhotographerMedia(index)[0]
                $mark.innerHTML = photographerTemplate.createPhotographerMedia(index = null)[1]
            })
        }

        // CHOIX TRIE
        displayMedia(getSortBy("popularite", mediasData)) // affichage par défaut
        $select.addEventListener('change', function () {
            console.log('selectedIndex => ' + this.selectedIndex);
            if (this.selectedIndex == 0) {
                displayMedia(getSortBy("popularite", mediasData))
                return
            }
            if (this.selectedIndex == 1) {
                displayMedia(getSortBy("date", mediasData))
                return
            }
            if (this.selectedIndex == 2) {
                displayMedia(getSortBy("titre", mediasData))
                return
            }
        })
    }
}

const init = new PhotographerPage()
init.main()

document.querySelector('body').addEventListener('click', function (e) {
    if(e.target.classList.contains('like')){
        e.target.parentNode.querySelector('span').textContent  = Number (  e.target.parentNode.querySelector('span').textContent)+ 1  
    document.querySelector('.mark').querySelector('p')
    .innerHTML =   Number ( document.querySelector('.mark').querySelector('p')
    .textContent ) + 1 + ' <i class="fa-solid fa-heart"></i>'

    }
})

