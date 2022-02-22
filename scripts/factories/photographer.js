// function photographerFactory(data) {
//     // je récupère les clés correspondant à mon json
//     const {
//         portrait,
//         picture = `assets/photographers/${portrait}`,
//         name,
//         id,
//         path = `/photographer.html?id=${id}`,
//         city,
//         country,
//         tagline,
//         price
//     } = data

//     function getUserCardDOM() {
//         // creation de mon article
//         const article = document.createElement('article')

//         // creation de ma card
//         const userCard =
//         `
//         <a href="${path}" class="photographer">
//             <img src="${picture}" alt="">
//             <h2>${name}</h2>
//         </a>
//         <h3 class="locality">${city}, ${country}</h3>
//         <h4 class="tagline">${tagline}</h4>
//         <span class="price">${price}€/jour</span>
//         `
     
//         article.innerHTML = userCard
//         return article
//     }
//     return {
//         name,
//         id,
//         getUserCardDOM
//     }
// }