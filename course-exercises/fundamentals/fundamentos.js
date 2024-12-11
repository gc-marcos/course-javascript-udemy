//Função VS Objeto

/*console.log('Teste')
console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto)*/



// Par Nome/Valor

/*const saudacao = 'Opa'

function saud () {
    const saudacao = 'Fala'
    return saudacao
}

const Cliente =  {
    nome: 'Pedro',
    Idade:  32,
    Peso: 66,
    Endereco: {
        Lagadouro: 'Estrada',
        Numero: 123
    }
}

console.log(saudacao)
console.log(saud())
console.log(Cliente)*/

//Operadores: Destructuring 1

/*const pessoa =  {
    Nome: 'Marcos',
    Idade: 28,
    Endereco: {
        Lagadouro: 'Estrada',
        Numero: 206
    }
}
console.log(pessoa)

const {Nome, Idade} = pessoa
console.log(Nome, Idade)

const {Nome: n, Idade: i} = pessoa
console.log(n, i)

const {sobrenome, rua = true} = pessoa
console.log(sobrenome, rua)

const {Endereco: {Lagadouro, Numero, Cep}} = pessoa
console.log(Lagadouro, Numero, Cep)*/

//Operadores: Destructuring 2

/*function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 970}))
console.log(rand({}))
console.log(rand())*/


//Operadores: Destructuring 3

/*function rand([min = 0, max = 100]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([93]))
console.log(rand([, 10]))
console.log(rand([]))*/

//thisBind

/*const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()//conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()*/

//thisBind

/*function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*//*, 1000)
}

new Pessoa*/

//arrowFunction

/*let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro =  a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui parametro
console.log(ola())*/

//arrowFunction 2

/*function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa*/

//arrowFunction 3

/*let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)*/

//Funções Anonimas

// const soma = function (x, y) {
//     return x + y
// }

// const imprimirResultado = function (a, b, operacao = soma) {
//     console.log(operacao(a, b))
// }

// imprimirResultado(3, 4)
// imprimirResultado(3, 4, soma)
// imprimirResultado(3, 4, function (x, y) {
//     return x - y
// })
// imprimirResultado(3, 4, (x, y) => x * y)

// const pessoa = {
//     falar: function () {
//         console.log('Olá')
//     }
// }
// pessoa.falar()


function somar(num1, num2) {
    const valor = 5
    return valor + num1 + num2
}

console.log(somar(4, 6))

for(var i = 0; i < 5; i++) {
    var outra = 5 
    console.log(i * outra)
}

console.log(outra)
console.log(i)