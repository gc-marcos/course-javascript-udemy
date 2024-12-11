//Criando Objeto através de uma factory function

const pessoa1 = (nome, sobrenome) => {
    return{
        andar: () => console.log(`${nome} ${sobrenome} está andando....`)
    }
}

const p1 = pessoa1('Marcos', 'Carvalho');
console.log(p1);
console.log(typeof(p1));
p1.andar();


//Criando Objeto atraves de uma função construtora

function Pessoa2(nome, sobrenome){
    this._nome = nome;
    this._sobrenome = sobrenome;

    this.andar = function(){
        console.log(`${this._nome} ${this._sobrenome} estś andando.........`)
    }
}
const p2 = new Pessoa2('Angela', 'Jolile');
console.log(p2);
console.log(typeof(p2));
p2.andar();


class Pessoa3{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    andar(){
        console.log(`${this._nome} ${this._sobrenome} está andando..`)
    }
}

const p3 = new Pessoa3('xuxa', 'meneguel');
console.log(p3);
console.log(typeof(p3));
p3.andar();