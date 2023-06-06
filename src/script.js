import validator from 'email-validator';

const loginPage = document.getElementById('login-board');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const button = document.getElementById('login-button');
const errorSection = document.getElementById('error-section');

const verifyEmail = (mail) => {
  if(!validator.validate(mail)) {
    email.value = '';
    throw new Error('Digite um email válido.')
  }
}

const verifyPassword = (pwd) => {
  if(pwd.value.length < 8) {
    password.value = ''
    throw new Error('Sua senha deve ter mais de 8 caracteres.')
  }
}

const showError = (error) => {
  errorSection.style.display = 'flex';
  errorSection.innerHTML = error.message.toUpperCase();
}

button.addEventListener('click', () => {
  try {
    verifyEmail(email.value);
    verifyPassword(password);
    loginPage.innerHTML = 'Login efetuado com sucesso :)'
  } catch (error) {
    showError(error)
  }
})

const cleanErrorSection = () => errorSection.style.display = 'none';

email.addEventListener('focus', cleanErrorSection);
password.addEventListener('focus', cleanErrorSection);
