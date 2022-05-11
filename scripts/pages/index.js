class HomePage {
    constructor() {
        this.photographerApi = new Api('/data/photographers.json')
        this.$photographerSection = document.querySelector('.photographer_section')
    }
    async main() {
        // DONNEES API 
        const photographersData = await this.photographerApi.getPhotographersAll()

        // HTML PHOTOGRAPHER
        photographersData.photographers.forEach(photographer => {
            const homeTemplate = new PhotographerTemplate(photographer)
            this.$photographerSection.appendChild(homeTemplate.createPhotographerCard())
        })
    }
}

const init = new HomePage()
init.main()


