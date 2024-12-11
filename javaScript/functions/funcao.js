function somar(num1, num2){
    return num1 + num2;
}

let res = somar(4, 6);
console.log(res);
console.log(somar(10, 5));

//Exemplo

const executar = somar;
console.log(executar(8, 7));

// Exemplo 2

function subtrair(num1, num2){
    return num1 - num2;
}

function faz_algo(num1, num2, xuxa){
    return xuxa(num1, num2);
}

console.log(faz_algo(5, 5, somar));
console.log(faz_algo(8, 3, subtrair));

//Exemplo 3

function outra(Z){
    return Z;
}
const ret = outra(somar);
console.log(ret(8, 2));
const re = outra(subtrair);
console.log(re(8, 2));

/*
Cidadãos de Primeira Classe
First-Class Citizens
higher-Order Function
*/

function mensagem(){
    console.log('Elvoluir é Preciso');
}

let reto = mensagem();
console.log(reto);

let valor = [1, 3.4, true, somar];
for(let i = 0; i < valor.length; i++){
    console.log(typeof(valor[i]));
}