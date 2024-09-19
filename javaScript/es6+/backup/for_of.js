let nome = 'Marcos';

for(let letra of nome){
    console.log(letra);
}

let numeros = [1, 5, 55, 60, 44];

for(let numero of numeros){
    console.log(numero * 2);
}
for(let indice in numeros){
    console.log(`Indice: ${indice}, Valor: ${numeros[indice]}`);
}

let cursos = new Map([
    [1, 'Leigos'],
    [2, 'Algoritimo'],
    [3, 'C#'],
    [4, 'Java'],
    [5, 'Python'],
    [6, 'Dados'],
    [7, 'Django']
]);
for(let curso of cursos){
    //Chave Valor
    // console.log(curso);
    console.log(`${curso[0]} - ${curso[1]}`);
}
//Somente a chave
for(let chave of cursos.keys()){
    console.log(chave)};

//Somente o valor
for(let valor of cursos.values()){
    console.log(valor);
}

//Chave e Valor
for(let [chave, valor] of cursos.entries()){
    console.log(`${chave} # ${valor}`);
}

let conjunto = new Set([1, 2, 3, 4, 5, 5]);
for(let num of conjunto){
    console.log(num);
}


