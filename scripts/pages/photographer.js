
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

        // DONNEES API 
        const photographersData = await this.photographerApi.getPhotographer()
        //console.log("PhotographerData",photographersData[0])
        const mediasData = await this.photographerApi.getPhotographerMedia()
        //console.log("PhotographerMedia",medias)

        const photographerTemplate = new PhotographerTemplate(photographersData[0],mediasData)
        //console.log(photographerTemplate.createPhotographerPage()[1])
        // const image = medias.filter(media => {
        //     if(idPhotographer == media.photographerId)
        //     return media
        // });
        // console.log("boucle",image)

        // mediasData.medias.forEach(media => {
        //     const photographerTemplate = new PhotographerTemplate(media)
        //     //console.log(photographer.portrait)
        //     $photographerMedia.innerHTML = photographerTemplate.createPhotographerMedia()
        // })


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