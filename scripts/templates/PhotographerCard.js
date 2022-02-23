class PhotographerTemplate {
    constructor(photographer,medias) {
        this.photographer = photographer
        this.medias = medias
        console.log("photographer", photographer)
        console.log("PhotographerCardMedia", this.media)

        // emballage = wrapper
        this.$wrapper = document.createElement('article')
    }

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

    createPhotographerMedia() {
        const userMedias =
            `
        <img src="Sample Photos/${this.photographer.name}/${this.medias.image}" alt="Sample Photos/${this.photographer.name}/${this.media}">
        <video src="Sample Photos/${this.photographer.name}/${this.medias.video}" </video>
        <div class="card-content">
            <h3 class="title-card">${this.medias.title}</h3>
            <div class="like">
                <span>${this.medias.like}</span>
                <i class="fa-solid fa-heart"></i>
            </div>
        </div>
        `
        this.$wrapper = userMedias
        return this.$wrapper
    }
}