function getLightbox() {
    const $lightboxEnabled = document.querySelectorAll(".lightbox-enabled")
    const lightboxArray = Array.from($lightboxEnabled)
    const lastImage = lightboxArray.length
    const $lightboxDisabled = document.querySelector(".close")
    const $lightboxContainer = document.querySelector(".lightbox-container")
    const $lightboxImg = document.querySelector(".lightbox-img")
    const $lightboxVideo = document.querySelector(".lightbox-video")
    const $lightboxBtns = document.querySelectorAll(".lightbox-btn")
    //const $lightboxCaption = document.getElementById("caption")
    let activeImg

    const showLightBox = () => {
        $lightboxContainer.style.display = "block"
    }
    const hideLightBox = () => {
        $lightboxContainer.style.display = "none"
    }

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
            $lightboxImg.src = img.dataset.imagesrc // data-imagesrc
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
        activeImg-- // décrémente de 1
        activeImg < 0 ? setActiveImg(lightboxArray[lastImage - 1]) : setActiveImg(lightboxArray[activeImg])
    }

    const transitionSlideNext = () => {
        activeImg++ // incrémente de 1
        activeImg === lastImage ? setActiveImg(lightboxArray[0]) : setActiveImg(lightboxArray[activeImg])
    }

    window.addEventListener('keydown', (e) => { // écoute des touches pressées
        console.log(e.key) // m'indique quelle touche a été enfoncé
        if (e.key.includes('Left') || e.key.includes('Right')) {
            e.preventDefault()
            transitionSlideHandler(e.key)
        }
        if (e.key.includes('Escape')) {
            hideLightBox()
            closeModal()
        }
    })
}