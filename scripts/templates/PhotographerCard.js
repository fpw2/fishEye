class PhotographerTemplate {
    /**
     * Récupère les données pour pouvoir les utiliser dans mes méthodes
     * @param {object} données des photographes 
     * @param {object} données des medias 
     * @returns {html}
     */
    constructor(photographer, medias) {
        // this(variable d'instance) permet de capturer nos variables et de les enregistrer
        // cela nous permet de les utiliser dans toutes les méthodes
        this.photographer = photographer
        this.medias = medias
        // wrapper = emballage
        // set an instance variable (wihtout capturing a constructor param)
        this.$wrapper = document.createElement('article')
    }
    
    /**
     * Fontion qui créé la carte d'un photographe sur la page index
     * @returns {html} html
     */
    createPhotographerCard() {
        const photographerCard =
            `
        <a href="/photographer.html?id=${this.photographer.id}" class="photographer">
            <img src="assets/photographers/${this.photographer.portrait}" alt="photo ${this.photographer.name}">
            <h2>${this.photographer.name}</h2>
        </a>
        <h3 class="locality">${this.photographer.city}, ${this.photographer.country}</h3>
        <h4 class="tagline">${this.photographer.tagline}</h4>
        <span class="price">${this.photographer.price}€/jour</span>
        `

        this.$wrapper.innerHTML = photographerCard
        return this.$wrapper
    }
    /**
     * Fontion qui créé l'en tête d'un photographe sur la page photographer
     * @returns {html} html
     */
    createPhotographerPage() {
        const userCard =    
            `
        <h2 class="name-page">${this.photographer.name}</h2>
        <h3 class="locality">${this.photographer.city}, ${this.photographer.country}</h3>
        <h4 class="tagline-page">${this.photographer.tagline}</h4>
        `
        const imgCard =
            `
        <img src="assets/photographers/${this.photographer.portrait}" alt="photo ${this.photographer.name}">
        `
        const array = [userCard, imgCard]
        return array
    }
    /**
     * Fontion qui créé les medias d'un photographe et le bandeau sur la page photographer
     * @param {string} numérote chaque media
     * @returns {html} html
     */
    createPhotographerMedia(index) {    
        const renderImg = `<img class="image pointer lightbox-enabled" tabindex="${index+4}" src="Sample Photos/${this.photographer.name}/${this.medias.image}" data-root="Sample Photos/${this.photographer.name}/${this.medias.image}" alt="${this.medias.image}"></img>`
        const renderVideo = `<video class="video pointer lightbox-enabled" tabindex="${index+4}" src="Sample Photos/${this.photographer.name}/${this.medias.video}" data-root="Sample Photos/${this.photographer.name}/${this.medias.video}" alt="${this.medias.video}"></video>`

        // si le media contien une image je l'affiche sinon j'affiche la vidéo
        const media = this.medias.image ? `${renderImg}` : `${renderVideo}`

        const userMedias =
            `
        <!-- Images used to open the lightbox -->
        <article class="gallery">
            <div class="card-gallery">
                ${media}
            </div>
            <div class="card-content">
                <h3 class="card-title">${this.medias.title}</h3>
                <div class="card-like" aria-label="likes">
                    <span class="add-like">${this.medias.likes}</span>
                    <i class="pointer like fa-solid fa-heart"></i> 
                </div>
            </div>
        </article>

        <!-- The Modal/Lightbox -->
        <div id="lightbox" class="lightbox-container" aria-label="image closeup view">
            <div class="modal-content">
                <div class="slide">
                    <img class="lightbox-img">
                    <video autoplay controls class="lightbox-video"></video>
                    <span id="caption"></span>
                </div>
                <div class="close pointer"><i class="fa-solid fa-xmark fa-3x"></i></div>
                <!-- Next/previous controls -->
                <a id="Left" class="lightbox-btn pointer"><i class="fa-solid fa-chevron-left fa-3x"></i></a>
                <a id="Right" class="lightbox-btn pointer"><i class="fa-solid fa-chevron-right fa-3x"></i></a>
            </div>
        </div>
        `
        // html nombre total de like et le prix du photographe
        const staticCard =
            `
        <p>${this.medias.totalLikes} <i class="fa-solid fa-heart"></i></p>
        <p>${this.photographer.price} € / jour</p>
        `

        const array = [userMedias, staticCard]
        return array
    }
}