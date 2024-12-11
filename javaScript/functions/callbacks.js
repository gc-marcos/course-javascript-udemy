const cursos = [
    'leigos',
    'Algoritimo',
    'C#',
    'Java',
    'Python',
    'Dados',
    'Web',
    'JavaScript'
]
function apresenta(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

cursos.forEach(apresenta); //Aqui está ocorrendo o callvack

//Usando Lambda
cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
})

//Usando Arrow
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));

const precos = [23, 78, 899, 12, 5, 67];

let menos = []

for(let p in precos){
    if(precos[p] < 50){
        menos.push(precos[p]);
    }
}
console.log(menos);

for(let i = 0; i <precos.length; i++){
    if(precos[i] < 50){
        menos.push(precos[i]);
    }
}
console.log(menos);

//Forma 1
menos = precos.filter(function(preco){
    return preco < 50;
});
console.log(menos);

menos = precos.filter(preco => preco < 50);
console.log(menos);