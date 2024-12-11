let idade = 28;
const nome = 'Marcos';

function soma_3(idade) {
    return idade + 3;
}

console.log(nome + ' tem ' + idade + ' anos.');

//TEMPLATE STRING
console.log(`${nome} tem ${soma_3(idade)} anos.`);

/*
Em template string usa-se a cráse, e não aspas simples ou acento agudo
NÃO É ´
NÃO É '
É `
*/