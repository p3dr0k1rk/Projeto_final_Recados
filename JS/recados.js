let descricao = document.querySelector("#description");
let detalhe = document.querySelector("#detail")


document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  guardar(descricao.value, detalhe.value);
  preencherTabela()

});
function guardar(descricao, detalhe) {
  if (descricao === "" || detalhe === "") {
    alert("Preencha os campos");
    return
  }

  let db = JSON.parse(localStorage.getItem("recados") || "[]");

  let recado = {
    id: db.length+1,
    descricao,
    detalhe,

  }

  db.push(recado);
  localStorage.setItem("recados", JSON.stringify(db))


}
let tbody = document.querySelector("#tbody");
const preencherTabela = () => {
  let db = JSON.parse(localStorage.getItem("recados") || "[]")
  tbody.innerHTML = ""
  for (let recado of db) {
    tbody.innerHTML += `
      <tr>
        <td>${recado.id}</td>
        <td>${recado.descricao}</th>
        <td>${recado.detalhe}</th>
        <td>
          <button class="btn1" onclick="editar(${recado.id})">editar</button>
          <button class="btn2" onclick="remover(${recado.id})">deletar</button>
        </td>
      </tr>
    `
  }

}

const editar = (id) => {

  const recado = userLogado.recados[id];
  
  document.querySelector(`#descricao${id}`).innerHTML = `<input type="text" class="td-input-descricao" id="td-descricao${id}" autocomplete="off" placeholder="${recado.descricao}"></input>`;

  document.querySelector(`#detalhamento${id}`).innerHTML = `<input type="text" class="td-input-detalhamento" id="td-detalhamento${id}" autocomplete="off" placeholder="${recado.detalhamento}"></input>`;

  document.querySelector(`#btn-editar${id}`).innerHTML = `<button class="btn-editar" id="btn-editar${id}" onclick="salvarEdicaoRecado(${id})">SALVAR</button>`;

  document.querySelector(`#btn-excluir${id}`).innerHTML = `<button class="btn-excluir" id="btn-excluir${id}" onclick="cancelar(${id})">CANCELAR</button>`;
  
}


const remover = (id) => {
  let db = JSON.parse(localStorage.getItem("recados") || "[]");
  const posicao = db.findIndex((el) => el.id == id);
 
  db.splice(posicao, 1);
  localStorage.setItem("recados", JSON.stringify(db))
  preencherTabela();
}

document.addEventListener("DOMContentLoaded", preencherTabela);





