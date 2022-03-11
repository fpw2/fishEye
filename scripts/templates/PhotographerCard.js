class PhotographerTemplate {
    constructor(photographer, medias) {
        this.photographer = photographer
        this.medias = medias
        //console.log("photographer", photographer)
        //console.log("PhotographerCardMedia", medias)

        // emballage = wrapper
        this.$wrapper = document.createElement('article')
    }

    // HTML INDEX
    createPhotographerCard() {
        const photographerCard =
            `
        <a href="/photographer.html?id=${this.photographer.id}" class="photographer">
            <img src="assets/photographers/${this.photographer.portrait}" alt="assets/photographers/${this.photographer.portrait}">
            <h2>${this.photographer.name}</h2>
        </a>
        <h3 class="locality">${this.photographer.city}, ${this.photographer.country}</h3>
        <h4 class="tagline">${this.photographer.tagline}</h4>
        <span class="price">${this.photographer.price}€/jour</span>
        `

        this.$wrapper.innerHTML = photographerCard
        return this.$wrapper
    }

    // HTML PHOTOGRAPHER
    createPhotographerPage() {
        const userCard =
            `
        <h2 class="name-page">${this.photographer.name}</h2>
        <h3 class="locality">${this.photographer.city}, ${this.photographer.country}</h3>
        <h4 class="tagline-page">${this.photographer.tagline}</h4>
        `
        const imgCard =
            `
        <img src="assets/photographers/${this.photographer.portrait}" alt="">
        `
        const array = [userCard, imgCard]
        return array
    }

    // HTML PHOTOGRAPHER
    createPhotographerMedia(index) {
        //console.log(index)
        //console.log("like",this.medias.like)
        // je vérifie que le chemin existe si c'est le cas ? j'affiche sinon : je ne mets rien
        const image = this.medias.image ? `<img class="image pointer" src="Sample Photos/${this.photographer.name}/${this.medias.image}"onclick="openLightbox();currentSlide(${index+1})" class="hover-shadow preview" alt="Sample Photos/${this.photographer.name}/${this.medias.image}"></img>` : ""
        const video = this.medias.video ? `<video controls class="video card-video pointer" src="Sample Photos/${this.photographer.name}/${this.medias.video}" onclick="openLightbox();currentSlide(1)" class="hover-shadow preview">> </video>` : ""
        const userMedias =
            `
        <!-- Images used to open the lightbox -->
        <article class="gallery">
            <div class="card-gallery">
                ${image}
                ${video}
            </div>
            <div class="card-content">
                <h3 class="card-title">${this.medias.title}</h3>
                <div class="card-like">
                    <span>${this.medias.likes}</span>
                    <i class="like fa-solid fa-heart"></i>
                </div>
            </div>
        </article>

        <!-- The Modal/Lightbox -->
        <div id="lightbox">
            <div class="modal-content">
                <div class="slide">
                    ${image}
                    ${video}
                    <span id="caption">${this.medias.title}</span>
                </div>
                <a class="close pointer" onclick="closeLightbox()"><i class="fa-duotone fa-xmark fa-2x"></i></a>
                <!-- Next/previous controls -->
                <a class="previous" onclick="changeSlide(-1)"><i class="fa-solid fa-chevron-left fa-3x"></i></a>
                <a class="next" onclick="changeSlide(1)"><i class="fa-solid fa-chevron-right fa-3x"></i></a>
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