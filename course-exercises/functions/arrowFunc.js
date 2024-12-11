//Forma 1
function somar1(num1, num2){
    return num1 + num2;
}
console.log(somar1(2, 4));
//Forma 2
let somar2 = function(num1, num2){
    return num1 + num2;
}
console.log(somar2(2, 4));
//Forma 3
let somar3 = somar1;
console.log(somar3(2, 4));
//Arrow Faction
let somar4 = (num1, num2) => {
    return num1 + num2;
}
console.log(somar4(2, 4));

/*
ATENÇÃO
Caso sua função tenha apenas 1 parâmetro de entrada e executa apenas uma linha, você pode simplificar ainda mais usando ARROW FUNCTION
*/

const dobrar = valor => valor * 2
console.log(dobrar(3));

function mensagem(){
    console.log('Oi Marcos');
}
mensagem()

const msg = () => console.log('Oi Marcos');
msg()