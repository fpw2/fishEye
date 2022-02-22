
// recuperation de mon idPhotographer dans l'url
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const idPhotographer = urlParams.get("id")
console.log("id="+idPhotographer)

/*******************************************/
class PhotographerPage {
    constructor() {
        this.photographerApi = new Api('/data/photographers.json')
        //console.log(this.photographerApi)
    }
    async main() {
        // DOM
        const $photographerSection = document.querySelector('.photograph-section')
        const $photographerPicture = document.querySelector('.photograph-picture')
        const $photographerMedia = document.querySelector(".photograph-media")

        // API DATA
        const photographersData = await this.photographerApi.getPhotographer()
        const medias = await this.photographerApi.getPhotographerMedia()

        console.log("data",photographersData[0])
        console.log("media",medias)
        const photographerTemplate = new PhotographerTemplate(photographersData[0],medias[0])
        //console.log(photographerTemplate.createPhotographerPage()[1])

        // HTML
        $photographerSection.innerHTML = photographerTemplate.createPhotographerPage()[0]
        $photographerPicture.innerHTML = photographerTemplate.createPhotographerPage()[1]
        $photographerMedia.innerHTML = photographerTemplate.createPhotographerMedia()
    }
}

const init = new PhotographerPage()
init.main()

// class PhotographerMedia {
//     constructor() {
//         this.photographerApi = new Api('/data/photographers.json')
//     }
//     async section() {
//         const mediaData = await this.photographerApi.getPhotographerMedia()
//         console.log(mediaData)
//     }

// }