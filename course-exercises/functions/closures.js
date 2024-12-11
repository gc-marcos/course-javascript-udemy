let xuxa  = 'Global'; // Pode ser acessada globalmente no nosso projeto

function imprimir(){
    console.log(xuxa);
}

function outra(){
    let xuxa = 'Local'; // pode ser acessada localmente no bloco/contexto
    imprimir();
    console.log(xuxa); //Local
}
outra();

let variavel = 'Global';
function externa(){
    let variavel = 'Local';
    function interna(){
        return variavel;
    }
    return interna;
}

let executa = externa();
console.log(executa());

//Estamos estudando CLOSURES (contexto LËXICO de uma função)
//Linguagem de Programação chamada CLOJURE são diferentes!!
