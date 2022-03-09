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
                let photographers = data.photographers
                console.log("getPhotographerAll", photographers)
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
                let photographers = data.photographers
                const photographerResult = photographers.filter(photographer => {
                    if (photographer.id == idPhotographer) {
                        return photographer
                    }
                })
                console.log("getPhotographer", photographerResult)
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
                let medias = data.media
                const mediaResult = medias.filter(media => {
                    return media.photographerId == idPhotographer
                })
                console.log("getPhotographerMedia", mediaResult)
                return mediaResult
            } else {
                console.error(response.status)
            }
        } catch (e) {
            console.log(e)
        }
    }


}