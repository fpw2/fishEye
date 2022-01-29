function photographerFactory(data) {
    const {
        portrait,
        name,
        city,
        country,
        tagline,
        price
    } = data

    const picture = `assets/photographers/${portrait}`

    function getUserCardDOM() {
        // creation de mon article
        const article = document.createElement('article')

        // div qui englobe img + name
        const linkPhotographer=document.createElement('div')
        linkPhotographer.classList = "photographer"
        // portrait
        const img = document.createElement('img')
        img.setAttribute("src", picture)
        // name
        const eltName = document.createElement('h2')
        eltName.textContent = name;
        // locality (city + country)
        const eltLocality = document.createElement("h3")
        eltLocality.textContent = city + ", " + country
        eltLocality.classList = "locality"
        // tagline
        const eltTagline = document.createElement("h4")
        eltTagline.textContent = tagline
        eltTagline.classList = "tagline"
        // price
        const eltPrice = document.createElement("span")
        eltPrice.textContent = price + "€/jour"
        eltPrice.classList = "price"
        // article photographer
        article.appendChild(linkPhotographer)
        linkPhotographer.appendChild(img)
        linkPhotographer.appendChild(eltName)
        article.appendChild(eltLocality)
        article.appendChild(eltTagline)
        article.appendChild(eltPrice)


        return (article)
    }
    return {
        name,
        getUserCardDOM
    }
}