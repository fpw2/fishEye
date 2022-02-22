class HomePage {
    constructor() {
        this.$photographerSection = document.querySelector('.photographer_section')
        this.photographerApi = new Api('/data/photographers.json')
        //console.log(this.photographerApi)
    }
    async main() {
        const photographersData = await this.photographerApi.getPhotographersAll()
        //console.log(photographersData)

        photographersData.photographers.forEach(photographer => {
            const homeTemplate = new PhotographerTemplate(photographer)
            //console.log(photographer.portrait)
            this.$photographerSection.appendChild(homeTemplate.createPhotographerCard())
        })
    }
}
const init = new HomePage()
init.main()


