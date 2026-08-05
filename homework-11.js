const emailForm = document.querySelector('#email-form')
emailForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)
  const dataEmail = Object.fromEntries(formData.entries())
  console.log(dataEmail)
})


const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const registrationButton = document.querySelector('#registration-button')
const buttonCloseModal = document.querySelector('#button-close-modal')

registrationButton.addEventListener('click', () => {
  modal.classList.add('modal-showed')
  overlay.classList.add('overlay-showed')
})

buttonCloseModal.addEventListener('click', () => {
  modal.classList.remove('modal-showed')
  overlay.classList.remove('overlay-showed')
})

const registrationForm = document.querySelector('#registration-form')
let user = null

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const formRegistration = event.target
  const formData = new FormData(formRegistration)
  const data = Object.fromEntries(formData.entries())
  const isValid = formRegistration.checkValidity()
  const password = data.password
  const repeatPassword = data.repeatPassword

  if (password !== repeatPassword || !isValid) {
    alert('Регистрация отклонена, заполните все поля корректно!')
  } else {
    data.createdOn = new Date()
    user = data
    console.log(user)
    modal.classList.remove('modal-showed')
    overlay.classList.remove('overlay-showed')
  }
})