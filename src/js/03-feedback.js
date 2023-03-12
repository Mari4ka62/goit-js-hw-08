import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');


form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};
const STORAGE_KEY = "feedback-form-state";

function onFormInput(e) {
    formData.email = email.value;
    formData.message = message.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}

populateInput();

function populateInput(){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData) {
        email.value = savedData.email;
        message.value = savedData.message;
    }
}


 