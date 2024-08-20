// Temos que referenciar o input
let input = document.querySelector("input[name=tarefa]");

//Temos que refrenciar o button
let btn = document.querySelector("#botao");

//Temos que refernciar a lista
let lista = document.querySelector("#lista");

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

let card = document.querySelector(".card");

function renderizarTarefas() {
  //Limpar a listagem de itens antes de renderizar a tela
  lista.innerHTML = "";

  for (tarefa of tarefas) {
    //Criar o item da lista
    let itemLista = document.createElement("li");

    //Adicionar classes no item da lista
    itemLista.setAttribute("class", "list-group-item list-group-item-action");

    // Adicionar evento de clique no item da lista
    itemLista.onclick = function () {
      deletarTarefa(this);
    };

    //Criar um texto
    let itemTexto = document.createTextNode(tarefa);

    //Adicionar o texto no item da lista
    itemLista.appendChild(itemTexto);

    //Adicionar o item da lista na lista
    lista.appendChild(itemLista);
  }
}
//Executando a função para renderizar as tarefas
renderizarTarefas();

// 1) Precisamos "escutar o evento de clique no botão"
btn.onclick = function () {
  let novaTarefa = input.value;
  if (novaTarefa !== "") {
    // 2) Precisamos atualizar a nova tarefa na lista (array) e renderizar a tela
    tarefas.push(novaTarefa);
    // 3) Executar a funcão para renderizar as tarefas
    renderizarTarefas();
    // Limpar o input
    input.value = "";
    // Limpar mensagens de erro (spans)
    removerSpans();
    // Salva os novos dados no banco de dados
    salvarDadosNoStorage();
  } else {
    // Limpar mensagens de erro (spans)
    removerSpans();

    let span = document.createElement("span");
    span.setAttribute("class", "alert alert-warning");
    let msg = document.createTextNode("Você precisa informar a tarefa");
    span.appendChild(msg);
    card.appendChild(span);
  }
};

function removerSpans() {
  let spans = document.querySelectorAll("span");

  for (let i = 0; i < spans.length; i++) {
    card.removeChild(spans[i]);
  }
}

function deletarTarefa(tar) {
  //romove a tarefa do array
  tarefas.splice(tarefas.indexOf(tar.textContent), 1);

  //redenrizar novamente a tela
  renderizarTarefas();
  // Salva os novos dados no banco de dados
  salvarDadosNoStorage();
}

function salvarDadosNoStorage(){
    // Todo navegador web possui esta capacidade
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

