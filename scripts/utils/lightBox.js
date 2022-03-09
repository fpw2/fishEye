// open the modal
function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}

// close the modal
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

let slideIndex = 1;
showSlide(slideIndex);

// next/previous controls
function changeSlide(n) {
	showSlide(slideIndex += n);
}

// thumbnail image controls
function currentSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  console.log("slides:",slides.length)
  if (n > slides.length) {
    slideIndex = 1;	
  }
  if (n < 1) {
  	slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = 'block';
}

