class Api {
    /**
     * Récupère les données de l'API
     * @param {string} chemin des données
     * @returns {object} datas
     */
    constructor(url) {
        this.url = url
    }
    /**
     * Récupère tous les photographes 
     * @returns {object} photographers si trouvé sinon undefined
     */
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
    /**
     * Récupère un photographer par son identifiant
     * @param {string} idPhotographer identifiant photographer
     * @returns {object} Photographe si trouvé sinon undefined
     */
    async getPhotographer(idPhotographer) {
        try {
            let response = await fetch(this.url)
            if (response.ok) {
                let data = await response.json()
                let photographers = data.photographers
                // la méthode find() retourne un objet
                const photographerResult = photographers.find(photographer => {
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
    /**
     * Récupère les médias d'un photographer par son identifiant
     * @param {string} idPhotographer identifiant photographer
     * @returns {object} medias si trouvé sinon undefined
     */
    async getPhotographerMedia(idPhotographer) {
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