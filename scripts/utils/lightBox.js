// open the modal
function openLightbox() {
  document.getElementById("lightbox").style.display = "block"
}

// close the modal
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none"
}

//showSlide(slideIndex)

// next/previous controls
function changeSlide(n) {
	showSlide(slideIndex += n)
  console.log(n)
}

// thumbnail image controls
function currentSlide(n) {
	showSlide(slideIndex = n)
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  console.log("longueur :",slides.length) // 10
  console.log("n :",n) 

  if (n < 1) {
    slideIndex = slides.length
    //document.querySelector('.slide').innerHTML = slides[slideIndex-1].innerHTML
  }
  if (n > slides.length ) {
    slideIndex = 1
    //document.querySelector('.slide').innerHTML = slides[slideIndex].innerHTML
  }
  console.log("slide index =",slideIndex)

  document.querySelector('.slide').innerHTML = slides[slideIndex-1].innerHTML
  // console.log("slide",slides)
}