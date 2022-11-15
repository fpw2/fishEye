/* Recuperation de l'id Photographer dans l'url */
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

class PhotographerPage {
    /**
     * Récupère les données de l'API
     */
    constructor() {
        this.photographerApi = new Api('./data/photographers.json')
    }
    /**
     * Créé l'en tête photographe avec les medias associés de la page photographer 
     */
    async main() {
        // DOM
        const $photographerSection = document.querySelector(".photograph-section")
        const $photographerPicture = document.querySelector(".photograph-picture")
        const $photographerMedia = document.querySelector(".photograph-media")
        const $bannerInfo = document.querySelector(".banner-info")
        let $select = document.querySelector('#select');

        // DONNEES API 
        const photographersData = await this.photographerApi.getPhotographer(urlParams.get("id"))
        const mediasData = await this.photographerApi.getPhotographerMedia(urlParams.get("id"))

        // HTML HEADER  
        const photographerTemplate = new PhotographerTemplate(photographersData)
        $photographerSection.innerHTML = photographerTemplate.createPhotographerPage()[0]
        $photographerPicture.innerHTML = photographerTemplate.createPhotographerPage()[1]

        // HTML MEDIA 
        /**
         * Créé le html des medias
         * @param {object} medias du photographer
         */
        const displayMedia = (medias) => {
            console.log(medias)
            let totalLikes = 0 // initialisation à zéro
            $photographerMedia.innerHTML = "" // j'efface le contenu à chaque changement 

            medias.map((media, index) => {
                // ajout d'un clé : totalLikes dans medias, valeur : media.totalLikes
                totalLikes += media.likes
                media.totalLikes = totalLikes

                const photographerTemplate = new PhotographerTemplate(photographersData, media)
                $photographerMedia.innerHTML += photographerTemplate.createPhotographerMedia(index)[0]
                $bannerInfo.innerHTML = photographerTemplate.createPhotographerMedia(index = null)[1]
            })
        }

        // CHOIX TRIE
        displayMedia(getSortBy("popularite", mediasData)) // affichage par défaut
        $select.addEventListener('change', function () {
            if (this.selectedIndex == 0) {
                displayMedia(getSortBy("popularite", mediasData))
            }
            if (this.selectedIndex == 1) {
                displayMedia(getSortBy("date", mediasData))
            }
            if (this.selectedIndex == 2) {
                displayMedia(getSortBy("titre", mediasData))
            }
            // Appel des fonctions au changement
            getLike()
            getLightbox()
        })

        // Appel des fonctions au chargement
        getLike()
        getLightbox()

    }
}
const init = new PhotographerPage();
init.main();