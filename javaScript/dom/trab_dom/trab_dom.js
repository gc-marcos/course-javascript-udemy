let idTexto = document.getElementById('produto');
console.log(idTexto);

let spans = document.getElementsByTagName('span');
console.log(spans);

let element = document.getElementsByClassName('texto');
console.log(element);

// Ler Valores 

console.log(spans[0].textContent);
console.log(spans[1].innerHTML);

// ALterar Valores

spans[0].textContent = 'Java';
spans[1].innerHTML = 'Python';

let span = document.getElementsByTagName('span')[0];
console.log(span.innerHTML);

span.style.textTransform = 'uppercase';

let inp = document.querySelector('input'); // Busca o primeiro elemento
console.log(inp);

let imp = document.querySelectorAll('input'); // Busca todos os elementos.
console.log(imp);

let elem = document.querySelectorAll('.texto'); // Busca os elementos pela classe 
console.log(elem);

let row = document.querySelectorAll('#row'); // Busca os elemento pelo id
console.log(row);

let ele = document.querySelector('input[name=preco');
console.log(ele);

// Exemplo 1

// let btn = document.querySelector('button.btn');
// btn.onclick = function() {
//     alert('Botão Clicado......');
// }


// Exemplo 2

let btn = document.querySelector('button.btn');
let empe = document.querySelector('input[name=produto]');
btn.onclick = function() {
    alert(`TEM ${empe.value}`);
}

