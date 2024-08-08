//Criando uma função construtora
function Pessoa(n, s, raca = 'Humana') {
  let altura = 0.3;
  let peso = 0.5;
  let idade = 0;
  let nome = n;
  let sexo = s;

  //Atributo publico pode ser acessado fora da função construtora
  this.raca = "raca";

  //Método privado só conseguimos fazer uso da função construtora
  let imprimir_dados = function () {
    console.log(
      `Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`
    );
  };

  //Método publico conseguimos acessar fora da função construtora
  this.fazer_aniversario = function () {
    idade += 1;
    imprimir_dados();
  };
  this.getIdade = function () {
    return idade;
  };
}

//Intanciando um objeto
const angelina = new Pessoa("Angelina", "Femonina");
console.log(angelina);

console.log(angelina.peso); //privado
console.log(angelina.raca); //publico

angelina.fazer_aniversario(); //publico
angelina.fazer_aniversario(); //publico

//Instanciar um novo Objeto
const felicity = new Pessoa("Felicity", "Feminino");

felicity.fazer_aniversario();
console.log(felicity.getIdade());

console.log(typeof(Pessoa)); //Function
console.log(typeof(felicity)); //Objeto