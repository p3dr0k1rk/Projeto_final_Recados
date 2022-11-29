//APRESENTAR

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
//APRESENTAR
let tbody = document.querySelector("#tbody");
const preencherTabela = () => {
  let db = JSON.parse(localStorage.getItem("recados") || "[]")
  tbody.innerHTML = ""
  for (let recado of db) {
    tbody.innerHTML += `
      <tr>
        <th>${recado.id}</th>
        <th>${recado.descricao}</th>
        <th>${recado.detalhe}</th>
        <th>
          <button class="btn1" onclick="editar(${recado.id})">editar</button>
          <button class="btn2" onclick="remover(${recado.id})">deletar</button>
        </th>
      </tr>
    `
  }

}
/* const editar = (id) => {
  let db = JSON.parse(localStorage.getItem("recados") || "[]")
  const posicao = db.findIndex((el) => el.id === id)
  //editar
  db.edit(posicao, 1);
  localStorage.setItem("recados", JSON.stringify(db))
  preencherTabela();
} */

const remover = (id) => {
  let db = JSON.parse(localStorage.getItem("recados") || "[]");
  //retorna a posição
  const posicao = db.findIndex((el) => el.id == id);
  //remove
  db.splice(posicao, 1);
  localStorage.setItem("recados", JSON.stringify(db))
  preencherTabela();
}

document.addEventListener("DOMContentLoaded", preencherTabela);





