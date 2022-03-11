/*********************** Recuperation de l'id Photographer dans l'url ******************/ 

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const idPhotographer = urlParams.get("id")

/***************************************************************************************/

/**
 * Incrémentation like
 */
function increment(data) {
    return data += 1 
}

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
        //console.log("PhotographerData",photographersData[0])
        const mediasData = await this.photographerApi.getPhotographerMedia()
        console.log("PhotographerMedia", mediasData)

        // INCREMENTATION LIKE
        // likes.addEventListener("click", increment(likes) {
        //     return likes += 1
        // })
        // increment(mediasData.likes)



        // HTML HEADER PHOTOGRAPHER 
        const photographerTemplate = new PhotographerTemplate(photographersData[0])
        $photographerSection.innerHTML = photographerTemplate.createPhotographerPage()[0]
        $photographerPicture.innerHTML = photographerTemplate.createPhotographerPage()[1]

        const like = mediasData.likes
        console.log(like)
        
        // HTML MEDIA
        const displayMedia = (objectMedia) => {
            // initialisation 
            let totalLikes = 0
            $photographerMedia.innerHTML = ""
            objectMedia.map((media,index) => {
                //console.log(index)
                // ajout d'un clé : totalLikes dans medias, valeur : media.likes
                totalLikes += media.likes
                media.totalLikes = totalLikes
                //console.log("totalLike",media.total)
                const photographerTemplate = new PhotographerTemplate(photographersData[0], media)
                //console.log("totalLike",totalLikes)
                //console.log(photographerTemplate)
                $photographerMedia.innerHTML += photographerTemplate.createPhotographerMedia(index)[0]
                //$mark.innerHTML = ""
                $mark.innerHTML = photographerTemplate.createPhotographerMedia(index)[1]
            })
        }

        // CHOIX TRIE
        displayMedia(sortBy("popularite", mediasData)) // affichage par défaut
        $select.addEventListener('change', function () {
            //console.log('selectedIndex => ' + this.selectedIndex);
            if (this.selectedIndex == 0) {
                displayMedia(sortBy("popularite", mediasData))
                return
            }
            if (this.selectedIndex == 1) {
                displayMedia(sortBy("date", mediasData))
                return
            }
            if (this.selectedIndex == 2) {
                displayMedia(sortBy("titre", mediasData))
                return
            }
        })
    }
}

const init = new PhotographerPage()
init.main()