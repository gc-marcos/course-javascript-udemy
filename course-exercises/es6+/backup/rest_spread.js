//Rest/Spread: (Juntar / Espalhar)
function total (...precos){
    let total = 0;
    precos.forEach(p => total += p);
    return total;
}
console.log(total(23.55, 44, 23.20, 3));
console.log(total(4, 8, 9));
console.log(total(3.3, 3.3));
console.log(total());



let frutas1 = ['Melão', 'Abacate', 'Mamão'];
let frutas2 = ['Morango', 'Laranja', 'Jaca'];

let compras = [...frutas1, ...frutas2];

console.log(compras);


let alunos = ['Paula', 'Julia', 'Kiara'];
let novo = 'Marcos';

//alunos.push(novo);
let todos = [...alunos, novo];
console.log(todos);

