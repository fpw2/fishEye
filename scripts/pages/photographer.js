import {getLike} from "../utils/likes"



/* Recuperation de l'id Photographer dans l'url */
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const idPhotographer = urlParams.get("id")

class PhotographerPage {
    constructor() {
        this.photographerApi = new Api('/data/photographers.json')
    }
    async main() {
        // DOM
        const $photographerSection = document.querySelector(".photograph-section")
        const $photographerPicture = document.querySelector(".photograph-picture")
        const $photographerMedia = document.querySelector(".photograph-media")
        const $bannerInfo = document.querySelector(".banner-info")
        let $select = document.querySelector('#select');

        // DONNEES API 
        const photographersData = await this.photographerApi.getPhotographer()
        const mediasData = await this.photographerApi.getPhotographerMedia()

        // HTML HEADER  
        const photographerTemplate = new PhotographerTemplate(photographersData)
        $photographerSection.innerHTML = photographerTemplate.createPhotographerPage()[0]
        $photographerPicture.innerHTML = photographerTemplate.createPhotographerPage()[1]

        // HTML MEDIA 
        const displayMedia = (medias) => {
            let totalLikes = 0 // initialisation à zéro
            $photographerMedia.innerHTML = "" // j'efface le contenu à chaque changement 

            medias.map((media, index) => {
                // ajout d'un clé : totalLikes dans medias, valeur : media.totalLikes
                totalLikes += media.likes
                media.totalLikes = totalLikes
                //console.log("totalLike",media.totalLikes)

                const photographerTemplate = new PhotographerTemplate(photographersData, media)
                $photographerMedia.innerHTML += photographerTemplate.createPhotographerMedia(index)[0]
                $bannerInfo.innerHTML = photographerTemplate.createPhotographerMedia(index = null)[1]
            })

            //lightbox
            const $lightboxEnabled = document.querySelectorAll(".lightbox-enabled")
            const lightboxArray = Array.from($lightboxEnabled)
            const lastImage = lightboxArray.length
            const $lightboxDisabled = document.querySelector(".close")
            const $lightboxContainer = document.querySelector(".lightbox-container")
            const $lightboxImg = document.querySelector(".lightbox-img")
            const $lightboxVideo = document.querySelector(".lightbox-video")
            const $lightboxBtns = document.querySelectorAll(".lightbox-btn")
            const $lightboxCaption = document.getElementById("caption")
            let activeImg

            const showLightBox = () => {$lightboxContainer.style.display = "block"}
            const hideLightBox = () => {$lightboxContainer.style.display = "none"}

            $lightboxEnabled.forEach(img => {
                img.addEventListener("click", () => {
                    showLightBox()
                    setActiveImg(img) // img = <img src="chemin">
                })
            })

            $lightboxDisabled.addEventListener("click", () => {
                hideLightBox()
            })

            const setActiveImg = (img) => { // img =>
                console.log("video :", img.dataset.imagesrc.includes('mp4'))

                if (img.dataset.imagesrc.includes('mp4')) {
                    $lightboxVideo.src = img.dataset.imagesrc
                    $lightboxVideo.style.display = "block"
                    $lightboxImg.style.display = "none"
                } else {
                    $lightboxImg.src = img.dataset.imagesrc  // data-imagesrc
                    $lightboxImg.style.display = "block"
                    $lightboxVideo.style.display = "none"
                }
                
                console.log("set", img)
                console.log("src", $lightboxImg.src)
                activeImg = lightboxArray.indexOf(img) // numéro de l'image
                console.log("active", activeImg)
            }

            $lightboxBtns.forEach(btn => {
                btn.addEventListener("click", (e) => {
                    transitionSlideHandler(e.currentTarget.id) // cible les flèches clickées
                })
            })

            const transitionSlideHandler = (moveItem) => { // gestionnaire de transition des diapositives
                moveItem.includes("Left") ? transitionSlidePrevious() : transitionSlideNext()
            }

            const transitionSlidePrevious = () => {
                activeImg--  // décrémente de 1
                activeImg < 0 ? setActiveImg(lightboxArray[lastImage - 1]) : setActiveImg(lightboxArray[activeImg])
            }

            const transitionSlideNext = () => {
                activeImg++  // incrémente de 1
                activeImg === lastImage ? setActiveImg(lightboxArray[0]) : setActiveImg(lightboxArray[activeImg])
            }

            window.addEventListener('keydown', (e) => { // écoute des touches pressées
                console.log(e.key)
                if (e.key.includes('Left') || e.key.includes('Right')) {
                    e.preventDefault()
                    transitionSlideHandler(e.key)
                }if(e.key.includes('Escape')){
                    hideLightBox()
                }
            })

            // //Incrementation like
            // let $likes = document.querySelectorAll(".like")
            // $likes.forEach((like) => {
            //     like.addEventListener("click", (e) => {
            //         //console.log(e.target.previousElementSibling.textContent)
            //         console.log(e.target.previousElementSibling)
            //         let $numberLikeTxt = e.target.previousElementSibling
            //         let numberLikeTxt = like.previousElementSibling.textContent
            //         numberLikeTxt = Number(numberLikeTxt) + 1
            //         $numberLikeTxt.textContent = numberLikeTxt
            //         console.log($numberLikeTxt)
            //         //console.log(e.target)
            //         document.querySelector('.banner-info').querySelector('p').innerHTML = Number(document.querySelector('.banner-info').querySelector('p').textContent) + 1 + ' <i class="fa-solid fa-heart"></i>'
            //     })
            // })
            getLike()

        }

        // CHOIX TRIE
        displayMedia(getSortBy("popularite", mediasData)) // affichage par défaut
        $select.addEventListener('change', function () {
            console.log('selectedIndex => ' + this.selectedIndex);
            if (this.selectedIndex == 0) {
                displayMedia(getSortBy("popularite", mediasData))
                return
            }
            if (this.selectedIndex == 1) {
                displayMedia(getSortBy("date", mediasData))
                return
            }
            if (this.selectedIndex == 2) {
                displayMedia(getSortBy("titre", mediasData))
                return
            }
        })
    }
}

const init = new PhotographerPage()
init.main()