let logado = sessionStorage.getItem('logado');
let listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

let botaoLogin = document.getElementById('button');

document.addEventListener('DOMContentLoaded', () => {
    checarLogado();

    function checarLogado(){
        if(logado) {
            salvarSessao(logado);
            window.location.href = "./recados.html";
        }
    }
})

botaoLogin.addEventListener('click', () => {
    verificarLogin();
})

function verificarLogin(){
    let emailHTML = document.getElementById('email');
    let senhaHTML = document.getElementById('senha');

    let user = listaUsuarios.find(
        (valor) => valor.email === emailHTML.value && valor.senha === senhaHTML.value);

    if(!user){
        alert('E-mail ou Senha inválidos.');
        return;
    }

    salvarSessao(emailHTML.value);
    window.location.href = "./recados.html";
}

function salvarSessao(data) {
    JSON.stringify(sessionStorage.setItem("logado", data));
}