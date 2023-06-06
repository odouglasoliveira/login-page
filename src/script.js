import validator from 'email-validator';
import Swal from 'sweetalert2';

const loginPage = document.getElementById('login-board');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const button = document.getElementById('login-button');
const errorSection = document.getElementById('error-section');

const verifyEmail = (mail) => {
  if(!validator.validate(mail)) {
    email.value = '';
    Swal.fire({
      title: 'Error!',
      text: 'Digite um email válido.',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    throw new Error('Digite um email válido');
  }
}

const verifyPassword = (pwd) => {
  if(pwd.value.length < 8) {
    password.value = ''
    Swal.fire({
      title: 'Error!',
      text: 'Sua senha precisa ter mais de 8 caracteres',
      icon: 'error',
      confirmButtonText: 'Ok'
    })
    throw new Error('Sua senha precisa ter mais de 8 caracteres.');
  }
}

button.addEventListener('click', () => {
  try {
    verifyEmail(email.value);
    verifyPassword(password);
    Swal.fire({
      title: 'Login efetuado!',
      text: 'Login efetuado  com sucesso.',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    loginPage.innerHTML = 'Login efetuado com sucesso :)'
  } catch (error) {
    console.log(error.message)
  }
})

const cleanErrorSection = () => errorSection.style.display = 'none';

email.addEventListener('focus', cleanErrorSection);
password.addEventListener('focus', cleanErrorSection);
