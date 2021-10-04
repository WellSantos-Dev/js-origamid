// function Pessoa(nome, idade, endereco) {
//   this.nome = nome;
//   this.idade = idade;
//   this.endereco = endereco;
// }

// Pessoa.prototype.andar = function() {
//   console.log(`${this.nome} está andando`)
// }

// Pessoa.prototype.endereco = {
//   endereco: `${this.endereco}`
// }


// const well = new Pessoa('Wellington', 19, 'Rua são Lucas')
// const nath = new Pessoa('Nathally', 17, 'Não sei nome de rua kkkk')


const pais = "Brasil";
const cidade = new String('São Sebastião')

const array = ["Cachorro", "Gato", "Cavalo"]

function Array() {
  prototype = {
    this.pop = () => {
      ...
    }
  }
}

const nomes = new Array()

nomes.pop(...)

Array.prototype.helloWorld = function() {
  return `Olá, mundo!!`
}

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa() {
  this.nome = nome;
  this.idade = idade;
  Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
  }
}

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
