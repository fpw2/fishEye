/* Recuperation de l'id Photographer dans l'url */
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const idPhotographer = urlParams.get("id")
console.log(idPhotographer)

class PhotographerPage {
    constructor() {
        this.photographerApi = new Api('/data/photographers.json')
    }
    async main() {
        // DOM
        const $photographerSection = document.querySelector(".photograph-section")
        const $photographerPicture = document.querySelector(".photograph-picture")
        const $photographerMedia = document.querySelector(".photograph-media")
        const $bannerInfo = document.querySelector(".banner-info")
        let $select = document.querySelector('#select');

        // DONNEES API 
        const photographersData = await this.photographerApi.getPhotographer()
        const mediasData = await this.photographerApi.getPhotographerMedia()

        // HTML HEADER  
        const photographerTemplate = new PhotographerTemplate(photographersData)
        $photographerSection.innerHTML = photographerTemplate.createPhotographerPage()[0]
        $photographerPicture.innerHTML = photographerTemplate.createPhotographerPage()[1]

        // HTML MEDIA 
        const displayMedia = (medias) => {
            let totalLikes = 0 // initialisation à zéro
            $photographerMedia.innerHTML = "" // j'efface le contenu à chaque changement 

            medias.map((media, index) => {
                // ajout d'un clé : totalLikes dans medias, valeur : media.totalLikes
                totalLikes += media.likes
                media.totalLikes = totalLikes
                //console.log("totalLike",media.totalLikes)

                const photographerTemplate = new PhotographerTemplate(photographersData, media)
                $photographerMedia.innerHTML += photographerTemplate.createPhotographerMedia(index)[0]
                $bannerInfo.innerHTML = photographerTemplate.createPhotographerMedia(index = null)[1]
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

        //Appel des fonctions
        getLike()
        getLightbox()

    }
}
const init = new PhotographerPage();
init.main();