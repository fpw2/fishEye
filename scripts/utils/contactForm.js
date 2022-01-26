function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

let contactForm = document.getElementById("contact-form")
let contactModal = document.getElementById("contact_modal")

let firstName = document.getElementById("first")
firstName.oninvalid=function(event){
    event.target.setCustomValidity('le prénom ne doit contenir que des lettres')
}

// contactForm.addeListener('submit',function(e) {
//     e.preventDefault()

//     // input
//     let firstName = document.getElementById("first")
//     let lastName = document.getElementById("last")
//     let email = document.getElementById("email")
//     let message = document.getElementById("message")

//     // regex
//     let identityFormat = /^[a-zA-Z]{2,}$/i
//     var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//     let value = firstName.value
//     console.log(value)


//     contactModal.style.display = "none"


// })