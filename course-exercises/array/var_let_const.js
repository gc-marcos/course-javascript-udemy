// var escopo global

// var numero = 42;
// console.log(numero);

// numero += 18;
// console.log(numero);

// let escopo local

// let outro_numero = 42;
// console.log(outro_numero);

// outro_numero += 18;
// console.log(outro_numero);

// let nome = 'Marcos';
// console.log(nome);

// nome = 'Bonito'
// console.log(nome);

// for(var i = 0; i < 5; i++) {
//     var valor = i * 3;
//     console.log(valor);
// }
// console.log(valor);
// console.log(i);

// for(let i = 0; i < 5; i++) {
//     var valor =  i * 3;
//     console.log(valor);
// }
// console.log(valor); ??????????
// console.log(i);  ReferenceError: i is not defined


// Quando usar var ele não dar erro quando declara duas variaveis com mesmo nome.
// Já let é ao contrario ela dá erro quando declara duas variaveis com mesmo nome.

var num = 80;
// console.log(num);
var num = 32;
// console.log(num);

let numLet = 80;
// console.log(numLet);
// let numLet = 32; SyntaxError: Identifier 'numLet'
// console.log(numLet); 


// const não altera o valor!!!

const taxa = 1.44;
// console.log(taxa);
let res = 45 * taxa;
// console.log(res);

// taxa = 5;
// console.log(taxa); Não pode trocar o valor da const


// MAS A CONST PODE SOFRE MULTAÇÃO

const curso = {nome: "Programação em JavaScript"};
// console.log(curso.nome);

// Não posso alterar o valor de constante
// curso = 43; //ERRO!!

// Podemos realizar mutação em dados contidos no constante 
curso.nome = "Programação em Python";  // MUTAÇÃO
// console.log(curso);

/*
Dicas de como declarar variáveis em JavaScript:

- A variável poderá ser alterada? (vai variar?) se sim, use LET;
- A variável será constante? (não vai variar?) se sim, use CONST;
*/

const valor = 5;

for(let i = 0; i < valor; i++) {  //NÃO PODERIA SER CONST
    console.log(valor - i);
}