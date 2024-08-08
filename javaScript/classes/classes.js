//classe 1

class Lancamento {
    constructor (nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lacamentos = []
    }

    addLancamentos(...lacamentos) {
        lacamentos.forEach(l => this.lacamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lacamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -230)
const contaDeAgua = new Lancamento('Agua', -70)
const contaDeAluguel = new Lancamento('Aluguel', -3500)

const contas = new CicloFinanceiro(6, 2023)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua, contaDeAluguel)
console.log(contas.sumario())

//Classe 2

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
