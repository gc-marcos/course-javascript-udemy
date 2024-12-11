/*
-conjuntos não aceitam repetição de valores
-conjuntos não são indexados
*/

// Declarando um conjunto
let cursos = new Set();

//Adicionando Valores
cursos.add('Leigos');
cursos.add('Algoritimo', 'logica');
cursos.add('C#').add('Java').add('Python');

console.log(cursos);
console.log(cursos.size);

console.log(cursos.has('Java'));

//Deletar elementos de um cojunto

let ret = cursos.delete('Leigos');
console.log(ret);


let frutas = ['Uva', 'Maçã', 'Pera', 'Uva'];
let frutas_unicas = new Set(frutas);
console.log(frutas_unicas)