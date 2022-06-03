import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateFormInput();

function onFormInput(e) {

    const email = form.email.value;
    const message = form.message.value;

    const formData = {
        email,
        message,
    };
    console.log(formData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);

    formData.forEach((value, name) => console.log(`${name} : ${value}`));

    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
};

function populateFormInput() {
    let savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedMessage) {
        form.elements.email.value = savedMessage.email;
        form.elements.message.value = savedMessage.message;
    };

};