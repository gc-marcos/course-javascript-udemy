function calcular_idade1(ano_nascimento) {
    const data = new Date(); //Gera a Data Atual
    const idade =  data.getFullYear() - ano_nascimento;
    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();
    const idade = data.getUTCFullYear() - ano_nascimento;

    console.log(idade);
}

let ret = calcular_idade1(2000);
console.log(ret +3);

console.log(2000);

const data = new Date();
console.log('Data Completa: ' + data);
console.log('Ano: ' + data.getFullYear());
console.log('Mês: ' + data.getMonth()); // 0 para Janeiro e 1 para Fevereiro e assim por diante

function somar(num1, num2){
    return num1 + num2;
}
console.log(somar(4, 6)); //10
console.log(somar(4)); //MaM - Not a Number
console.log(somar(4, 6, 8)); //10
console.log(somar(4, 6, 7, 8, 8)); //10