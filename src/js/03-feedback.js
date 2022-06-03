import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateFormInput();

function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    formData.forEach((value, name) => console.log(`${name} : ${value}`));

    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
};

function onFormInput(e) {

    const formElements = e.currentTarget.elements;

    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
        email,
        message,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function populateFormInput() {
    let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage) {
        form.elements.email.value = savedMessage.email;
        form.elements.message.value = savedMessage.message;
    };

};