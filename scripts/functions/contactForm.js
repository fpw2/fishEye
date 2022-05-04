// DOM
const container = document.querySelector(".container")
const modal = document.getElementById("contact_modal");
const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const email = document.getElementById("email")
const contactForm = document.querySelector("#contact-form")

// Affichage modal contactez-moi
function displayModal() {
	modal.style.display = "block";
	firstName.focus()
    container.classList.add("fuzzy") // flou
}

// Fermeture modal contactez-moi
function closeModal() {
    modal.style.display = "none";
    container.classList.remove("fuzzy")
}

firstName.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
        e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
        e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus sans chiffre");
		}
	}
}

lastName.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
        e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
        e.target.setCustomValidity("Veuillez entrer 2 caractères ou plus sans chiffre");
		}
	}
}

email.oninvalid = function(e) {
	e.target.setCustomValidity("");
	if (!e.target.validity.valid) {
		if (e.target.value.length == 0) {
        e.target.setCustomValidity("Ce champ est obligatoire");
		} else {
        e.target.setCustomValidity("Entrez une adresse valide. Exemple:contact@mail.com");
		}
	}
}

// contactForm.addEventListener("submit", (e) => {
//     e.preventDefault
//     if(!firstName.oninvalid){
//         closeModal()
//     }
// })
