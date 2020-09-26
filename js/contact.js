const contactForm = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const invalidEmailError = document.querySelector("#invalidEmailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

contactForm.addEventListener("submit", validateContactForm);

function validateContactForm() {
    event.preventDefault();

    const firstNameValue = firstName.value;
    

    if (validateInput(firstNameValue, 1) === true) {
        firstNameError.style.display = "none";
        
    } else {
        firstNameError.style.display = "block";        
    }

    const lastNameValue = lastName.value;
    
    if (validateInput(lastNameValue, 1) === true) {
        lastNameError.style.display = "none";
        
    } else {
        lastNameError.style.display = "block";      
    }

    const emailValue = email.value;

    if (validateInput(emailValue, 1) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    } 

    const subjectValue = subject.value;

    if (validateInput(subjectValue, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

}

function validateInput(value, lengthToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lengthToCheck) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}
