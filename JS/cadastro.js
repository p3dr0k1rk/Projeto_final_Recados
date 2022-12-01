let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let senhaVerificada = document.querySelector("#senhaVerificada");

document.querySelector("button").addEventListener("click", "submit",  (e) => {
  e.preventDefault();
  salvar(email.value, senha.value, senhaVerificada.value);
  
});

function salvar(email, senha, senhaVerificada) {
  if (email === "" || senha === "" || senhaVerificada === "") {
    alert("Preencha os campos");
    return
  }
  if (senha !== senhaVerificada) {
    alert("Senhas não são iguais");
    return
  }
  
  let db = JSON.parse(localStorage.getItem("usuarios") || "[]");
  


  let usuario = {
    id: db.length + 1,
    email,
    senha,
  };
  
  db.push(usuario);
  
  localStorage.setItem("usuarios", JSON.stringify(db))
}
