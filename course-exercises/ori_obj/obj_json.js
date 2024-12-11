// JSON - JavaScript Object Notation

const curso = {
    nome: 'Prog. JS',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

console.log(curso);
console.log(curso.preco());
console.log(typeof(curso));

// Convertendo o Objeto JavaScript para JSON

const json = JSON.stringify(curso);
console.log(json); //JOSN
console.log(typeof(json));

//Convertendo de JSON para Objeto JavaScript

const json_errado = "{'nome': 'Prog. JS', 'preco': 27.99}";

const json_corrigido = '{"nome": "Prog. JS", "preco": 27.99}';

console.log(json_corrigido);
console.log(typeof(json_corrigido));


const novo_obj = JSON.parse(json_corrigido)
console.log(novo_obj);
console.log(typeof(novo_obj));