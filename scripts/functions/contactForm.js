// DOM
const logo = document.querySelector(".logo")
const container = document.querySelector(".container")
const modal = document.getElementById("contact_modal");
const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const email = document.getElementById("email")
const contactForm = document.querySelector("#contact-form")

/**
 * Affichage modal contactez-moi
 */
function displayModal() {
	modal.style.display = "block";
	firstName.focus()
    container.classList.add("fuzzy") // flou
}

/**
 * Fermeture modal contactez-moi
 */ 
function closeModal() {
    modal.style.display = "none";
    container.classList.remove("fuzzy")
}

// validation champ prénom
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

// validation champ nom
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

// validation champ mail
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

// validation formulaire 
modal.addEventListener("submit", function(e) {
	e.preventDefault()
	if(firstName.value && lastName.value && email.value){
		console.log("prénom :" + firstName.value)
		console.log("nom :"+ lastName.value)
		console.log("email :"+ email.value)
		closeModal()
		return false // empeche le rechargement de la page
	}
})

// gestion de fermeture la modale
window.addEventListener('keydown', (e) => {
	if (e.key.includes('Escape')) {
		closeModal()
		document.querySelector(".contact_button").focus() 
	} else {
		return false	
	}
})