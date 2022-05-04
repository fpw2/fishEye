//Incrementation like
function getLike() {
    let $likes = document.querySelectorAll(".like")
    $likes.forEach((like) => {
        like.addEventListener("click", (e) => {
            //console.log(e.target.previousElementSibling.textContent)
            console.log(e.target.previousElementSibling)
            let $numberLikeTxt = e.target.previousElementSibling
            let numberLikeTxt = like.previousElementSibling.textContent
            numberLikeTxt = Number(numberLikeTxt) + 1
            $numberLikeTxt.textContent = numberLikeTxt
            console.log($numberLikeTxt)
            //console.log(e.target)
            document.querySelector('.banner-info').querySelector('p').innerHTML = Number(document.querySelector('.banner-info').querySelector('p').textContent) + 1 + ' <i class="fa-solid fa-heart"></i>'
        })
    })
}
