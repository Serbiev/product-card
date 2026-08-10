import { Form } from './form.js';
import { Modal } from './modal.js';

const getFormData = (form) => {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
};

const emailForm = document.querySelector('#email-form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const dataEmail = getFormData(event.target);
  console.log(dataEmail);
});

const registrationModal = new Modal('modal');

const registrationButton = document.querySelector('#registration-button');
registrationButton.addEventListener('click', () => {
  registrationModal.openModal();
});

const registrationForm = new Form('registration-form');

registrationForm.form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = registrationForm.getFormData();
  const isValid = registrationForm.isValid();

  let user = null;
  const password = data.password;
  const repeatPassword = data.repeatPassword;

  if (password !== repeatPassword || !isValid) {
    alert('Регистрация отклонена, заполните все поля корректно!');
  } else {
    data.createdOn = new Date();
    user = data;
    console.log(user);

    registrationModal.closeModal();
    registrationForm.resetForm();
  }
});