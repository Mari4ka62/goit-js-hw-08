import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
// const input = document.querySelector('[name="email"]')
// const textarea = document.querySelector('[name="message"]');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const formData = {};

const STORAGE_KEY = 'feedback-form-state';

function onFormSubmit(event){
event.preventDefault();
event.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
console.log(formData);
}

function onFormInput(event){
formData.email = event.target.value;
formData.message = event.target.value;

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

reloadForm();

function reloadForm(event){
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(savedData){
        event.target.value = savedData.email;
        event.target.value = savedData.message;
    }
}

