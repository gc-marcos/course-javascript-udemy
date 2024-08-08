var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num);
function filtrarP(n) {
    return n % 2 === 0;
}
// console.log(filtrar(3));
// console.log(filtrar(6));

function filtrarI(n) {
    return n % 2 !== 0;
}

function filtrarMult5(n) {
    return n % 5 === 0;
}

var ret = num.filter(filtrarP);
// console.log(ret);
ret = num.filter(filtrarI);
// console.log(ret);
ret = num.filter(filtrarMult5);
// console.log(ret);



var alunos = [
    {mome: 'Marcos', nota: 10},
    {mome: 'Matheus', nota: 9},
    {mome: 'Junior', nota: 8},
    {mome: 'Marcos', nota: 7},
]
console.log(alunos);
console.log(alunos.length)

function maior8(aluno) {
    return aluno.nota > 8;
}


function menor8(aluno) {
    return aluno.nota < 8;
}

var filtrado = alunos.filter(maior8);
console.log(filtrado);
console.log(filtrado.length);


filtrado = alunos.filter(menor8);
console.log(filtrado)

console.log(filtrado.length)