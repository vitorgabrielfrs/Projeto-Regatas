document.addEventListener('DOMContentLoaded', function(){
    const login = document.getElementById('formulario');
    const button = document.getElementById("botao");
    const errorMessage = document.getElementById('errorMessage');
    const errorUser = document.getElementById('errorUser');
    const errorSenha = document.getElementById('errorSenha');
    button.disabled = true;
    login.addEventListener('submit', function(event){
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const usuarioValidade = 'user';
        const senhaValidade = '12345678';

        if(username === usuarioValidade && password === senhaValidade){
            window.location.href = 'dashboard.html';
        } else {
            errorMessage.textContent = 'Credenciais Incorretas';
            errorMessage.style.visibility = 'visible';
            errorMessage.style.marginTop = '10px';
            errorMessage.style.color = 'red';
            errorMessage.style.fontWeight = 'bold';
        }
    })
    login.addEventListener('input', function(){
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
       

        if (username.trim() === ''){
            errorUser.textContent = 'Você precisa digitar o username';
            errorUser.style.visibility = 'visible';
            errorUser.style.color = 'red';
            errorUser.style.fontWeight = 'bold'
            errorUser.style.fontSize = '14px'
            
        }
        else{
            errorUser.style.visibility = 'hidden';
        }
        if (username.trim() === '' || password.trim() === ''){
            
        }
        else{
            button.disabled = false;
        }
    })
})