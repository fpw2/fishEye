async function getPhotographers() {
    try {
        let url = '/data/photographers.json'
        let response = await fetch(url)
        if (response.ok) {
            let data = await response.json()
            let photographers = data.photographers
            console.log(photographers)
            return ({photographers:[...photographers]})
        } else {
            console.error(response.status)
        }
    } catch (e) {
        console.log(e)
    }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();

/**
 * lien vers la page photographer.html
 */
// function getPhotographerPage {

// }  

// class Photographer {
//     constructor(data){
//         this._name = data.name
//         console.log(name)
//     }
// }

// let linkPhotographer = document.getElementsByClassName(".photographer")