const curso = {
    nome: 'JS',
    horas: 25,
    preco: 29.99
}
console.log(curso);
console.log(typeof(curso));
console.log(Object.keys(curso));
console.log(Object.values(curso));
console.log(Object.entries(curso));

Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
}) 
Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

curso.nome = 'Java';
console.log(curso);

Object.defineProperty(curso, 'publicacao', {
    enumerable: false,
    writable: false,
    value: '07/12/2024'
})
curso.publicacao = '01/01/2021'
console.log(curso);
console.log(curso.publicacao);

Object.freeze(curso); //FREEZE não perte auterar os valores
curso.nome = 'Dango'
console.log(curso);

const usuarios = [
    {nome: 'Aline', empresa: '4M'},
    {nome: 'Aline', empresa: '4M'},
    {nome: 'Aline', empresa: '4M'},
    {nome: 'Aline', empresa: '4M'}
]

console.table(curso);
console.table(usuarios);



