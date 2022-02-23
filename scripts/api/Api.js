class Api {
    /**
     * @param {string} url 
     */
    constructor(url) {
        this.url = url
    }
    async getPhotographersAll() {
        try {
            let response = await fetch(this.url)
            if (response.ok) {
                let data = await response.json()
                //console.log(data)
                let photographers = data.photographers
                console.log("getPhotographerAll", photographers)
                //const idPhotographer = JSON.stringify(photographers)
                //console.log(idPhotographer)
                //localStorage.setItem("data",idPhotographer)
                return {
                    photographers
                }

            } else {
                console.error(response.status)
            }
        } catch (e) {
            console.log(e)
        }
    }
    async getPhotographer() {
        try {
            let response = await fetch(this.url)
            if (response.ok) {
                let data = await response.json()
                //console.log(data)
                let photographers = data.photographers
                const photographerResult = photographers.filter(photographer => {
                    if (photographer.id == idPhotographer) {
                        return photographer
                    }
                })
                //console.log(photographerPage(photographerResult[0]).getPhotographerCard()[0])
                // const userCardData = photographerPage(result[0]).getPhotographerCard()[0]
                //console.log(userCardData)
                // userCard.appendChild(userCardData)
                //console.log(photographerResult)
                return photographerResult

            } else {
                console.error(response.status)
            }
        } catch (e) {
            console.log(e)
        }
    }
    async getPhotographerMedia() {
        try {
            let response = await fetch(this.url)
            if (response.ok) {
                let data = await response.json()
                //console.log(data)
                let medias = data.media
                console.log("ApiMedia", medias)
                const mediaResult = medias.filter(media => {
                    if (media.photgrapherId == idPhotographer) {
                        return media
                    }
                })
                //console.log("ApiMedia", mediaResult)

                return {
                    medias
                }

            } else {
                console.error(response.status)
            }
        } catch (e) {
            console.log(e)
        }
    }


}