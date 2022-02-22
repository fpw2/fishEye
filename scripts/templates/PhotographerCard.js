class PhotographerTemplate {
    constructor(photographer,media) {
        this.photographer = photographer
        this.media = media
        console.log("photographer", photographer)
        console.log("media", media)

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
        <img src="assets/photographers/${this.photographer.portrait}" alt="assets/photographers/${this.photographer.portrait}">
        `

        const array = [userCard, imgCard]
        return array
    }

    createPhotographerMedia() {
        const media =
            `
        <img src="Sample Photos/${this.photographer.name}/${this.media}" alt="Sample Photos/${this.photographer.name}/${this.media[0]}">
        `
        return media
    }
}