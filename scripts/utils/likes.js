/**
 * Incrémente de 1 les likes à chaque click sur le coeur
 */
function getLike() {
    let $likes = document.querySelectorAll(".like")
    $likes.forEach((like) => {
        like.addEventListener("click", (e) => {
            let $numberLikeTxt = e.target.previousElementSibling
            let numberLikeTxt = like.previousElementSibling.textContent
            numberLike = Number(numberLikeTxt) 
            console.log(numberLike + 1)
            $numberLikeTxt.textContent = numberLike + 1
            document.querySelector('.banner-info').querySelector('p').innerHTML = Number(document.querySelector('.banner-info').querySelector('p').textContent) + 1 + ' <i class="fa-solid fa-heart"></i>'
        })
    })
}
