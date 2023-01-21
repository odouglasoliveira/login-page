const loginPage = document.getElementById('login-board');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const button = document.getElementById('login-button');
const errorSection = document.getElementById('error-section');

const verifyEmail = (mail) => {
  if(mail.value.trim().length === 0) {
    throw new Error('Digite um email.')
  }
  if(!mail.value.includes('@')) {
    email.value = ''
    throw new Error('Endereços de email válidos devem ter um "@".')
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
    verifyEmail(email);
    verifyPassword(password);
  } catch (error) {
    showError(error)
  }
})

email.addEventListener('focus', () =>  errorSection.style.display = 'none')
