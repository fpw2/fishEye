/**
 * Créé une lightbox et parcoure les medias
 */
function getLightbox() {
    // DOM
    const $lightboxEnabled = document.querySelectorAll(".lightbox-enabled")
    const lightboxArray = Array.from($lightboxEnabled)
    const lastImage = lightboxArray.length
    const $lightboxDisabled = document.querySelector(".close")
    const $lightboxContainer = document.querySelector(".lightbox-container")
    const $lightboxImg = document.querySelector(".lightbox-img")
    const $lightboxVideo = document.querySelector(".lightbox-video")
    const $lightboxBtns = document.querySelectorAll(".lightbox-btn")
    let activeImg

    /**
     * affiche ma lightbox
     */
    const showLightBox = () => {
        $lightboxContainer.style.display = "block"
    }

    /**
     * cache ma lightbox
     */
    const hideLightBox = () => {
        $lightboxContainer.style.display = "none"
    }

    // pour chaque click sur une image j'ouvre la lightbox avec l'image correspondante
    $lightboxEnabled.forEach(img => {
        img.addEventListener("click", () => {
            showLightBox()
            setActiveImg(img) // img = <img src="chemin">
        })
    })

    // permet d'ouvrir ma lightbox avec la touche Enter au focus
    document.addEventListener("keyup", (e) => {
        if(e.key === "Enter"){
            // activeElement ici permet de focus img au click = Enter
            document.activeElement.click()
        }
    })

    // fermeture de la lightbox au click sur la croix
    $lightboxDisabled.addEventListener("click", () => {
        hideLightBox()
    })

    /**
     * Affichage image ou video lightbox + description
     * @param {string} chemin image ou video
     */
    const setActiveImg = (img) => { 
        if (img.dataset.root.includes('mp4')) { // dataset va chercher l'attribut data-root => root
            $lightboxVideo.src = img.dataset.root
            $lightboxVideo.style.display = "block"
            $lightboxImg.style.display = "none"
        } else {
            $lightboxImg.src = img.dataset.root  
            $lightboxImg.style.display = "block"
            $lightboxVideo.style.display = "none"
        }
        activeImg = lightboxArray.indexOf(img) // numéro de l'image

        // closest remonte au parent de l'élément et je vais chercher dans le parent l'enfant que je veux sélectionner
        // ainsi je peux insérer un contenu à un autre endroit
        $lightboxImg.closest('.slide').querySelector('#caption').innerHTML = img.closest('.gallery').querySelector('.card-title').innerHTML

    }

    $lightboxBtns.forEach(btn => { // cible les flèches lightbox
        btn.addEventListener("click", (e) => {
            transitionSlideHandler(e.currentTarget.id) // me donne l'id de la flèche clické
        })
    })

    /**
     * gestionnaire de transition des diapositives
     * @param {string} Right or Left
     */
    const transitionSlideHandler = (moveItem) => {  
        moveItem.includes("Left") ? transitionSlidePrevious() : transitionSlideNext()
    }

    const transitionSlidePrevious = () => {
        activeImg-- // décrémente de 1
        activeImg < 0 ? setActiveImg(lightboxArray[lastImage - 1]) : setActiveImg(lightboxArray[activeImg])
    }

    const transitionSlideNext = () => {
        activeImg++ // incrémente de 1
        activeImg === lastImage ? setActiveImg(lightboxArray[0]) : setActiveImg(lightboxArray[activeImg])
    }

    window.addEventListener('keydown', (e) => { // écoute des touches pressées
        //console.log(e.key) // m'indique quelle touche a été enfoncé
        if($lightboxContainer.style.display == "block"){
            if (e.key.includes('Left') || e.key.includes('Right')) {
                e.preventDefault()
                transitionSlideHandler(e.key)
            }
            if (e.key.includes('Escape')) {
                hideLightBox()
                closeModal() 
            }
        }
    })
}
