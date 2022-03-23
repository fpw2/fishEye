// open the modal
function openLightbox() {
  document.getElementById("lightbox").style.display = "block";
}

// close the modal
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

const slides = document.querySelector(".photograph-picture img");
console.log(slides)
// let imgSrc;
// // get images src onclick
// gallery.forEach((slide) => {
//     slide.addEventListener("click", (e) => {
//         imgSrc = e.target.src;
//         console.log(imgSrc)
//     });
// });


// let slideIndex = 0;
// showSlide(slideIndex);

// //next/previous controls
// function changeSlide(n) {
//   showSlide(slideIndex += n);
// }

// // thumbnail image controls
// function currentSlide(n) {
//   showSlide(slideIndex = n);
// }

// function showSlide(n) {
//   let slides = document.querySelectorAll(".slide");
//   // //console.log("slides:",slides.length)
//   // if (n > slides.length) {
//   //   slideIndex = 0
//   // }
//   // if (n < 1) {
//   //   slideIndex = slides.length
//   // }
//   // for (let i = 0; i < slides.length; i++) {
//   //   console.log("slide", slides[i])
//   //   slides[i].style.display = "none"
//   // }
//   slides[n].style.display = "block"
//   //document.querySelector('.slide').innerHTML = slides[slideIndex-1].innerHTML
// }



// class lightbox {

//   static init () {
//     const links = document.querySelectorAll(".image",".video")
//       links.forEach(link => link.addEventListener("click", (e) => {
//         e.preventDefault()
//         new lightbox(e.currentTarget.getAttribut("src"))
//       }))
//   }



// }

// lightbox.init()

// // open the modal
// function openLightbox() {
//   document.getElementById("lightbox").style.display = "block";
// }

// // close the modal
// function closeLightbox() {
//   document.getElementById("lightbox").style.display = "none";
// }

// let slideIndex = 1;
// showSlide(slideIndex);

// // next/previous controls
// function changeSlide(n) {
// 	showSlide(slideIndex += n);
// }

// // thumbnail image controls
// function currentSlide(n) {
// 	showSlide(slideIndex = n);
// }

// function showSlide(n) {
//   const slides = document.getElementsByClassName("slide");

//   if (n > slides.length) {
//     slideIndex = 1;	
//   }
//   if (n < 1) {
//   	slideIndex = slides.length;
//   }
//   // for (let i = 0; i < slides.length; i++) {
//   //     //slides[i].style.display = "none";
//   // }

//   document.querySelector('.slide').innerHTML = slides[slideIndex-1].innerHTML
//   // console.log("slide",slides)
// }