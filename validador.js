function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorUser = document.getElementById('errorUser');
    const errorSenha = document.getElementById('errorSenha');
    const errorMessage = document.getElementById('errorMessage');
  
    let hasError = false;
  
    errorUser.textContent = '';
    errorSenha.textContent = '';
    errorMessage.textContent = '';
  
    if (!isValidEmail(username)) {
      errorUser.textContent = 'E-mail inválido';
      hasError = true;
    }
  
    if (password.length < 5) {
      errorSenha.textContent = 'A senha deve ter pelo menos 5 caracteres';
      hasError = true;
    }
  
    if (hasError) {
      errorMessage.textContent = 'Email e/ou senha inválidos';
    } else {
      errorMessage.textContent = 'Login bem-sucedido!';
      errorMessage.style.color = 'green';
    }
  });