// add all the elements inside modal which you want to make focusable
const  focusableElements =
    'img, input, textarea, button, [tabindex]:not([tabindex="-1"])';
const contactModal = document.querySelector('.modal'); // select the modal by it's id

const firstFocusableElement = contactModal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = contactModal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


document.addEventListener('keydown', function(e) {
  console.log(e.key)
  //document.getElementById("first").focus()
  let isTabPressed = e.key === 'Tab' 
  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) { // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else { // if tab key is pressed
    if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();