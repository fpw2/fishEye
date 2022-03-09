class HomePage {
    constructor() {
        this.photographerApi = new Api('/data/photographers.json')
        //console.log(this.photographerApi)
    }
    async main() {
        // DOM
        this.$photographerSection = document.querySelector('.photographer_section')

        // DONNEES API 
        const photographersData = await this.photographerApi.getPhotographersAll()
        //console.log(photographersData)

        // HTML PHOTOGRAPHER
        photographersData.photographers.forEach(photographer => {
            const homeTemplate = new PhotographerTemplate(photographer)
            //console.log(photographer.portrait)
            this.$photographerSection.appendChild(homeTemplate.createPhotographerCard())
        })
    }
}
const init = new HomePage()
init.main()


