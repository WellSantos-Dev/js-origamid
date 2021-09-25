// Treinando funções construtoras
function Pessoa(nomeAtt, pesoAtt) {
  this.nome = nomeAtt
  this.peso = pesoAtt
}

const well = new Pessoa("Wellington", 65)
console.log(well)

const nath = new Pessoa('Nathally', 60)
console.log(nath)




// Criar um programa que verifica se a pessoa está apta a servir o exercito
// Requisitos minimos:
// Peso : 60;
// idade : >= 19 OR <= 25
function Pessoa(nomeAtt, idadeAtt, pesoAtt) {
  this.nome = nomeAtt;
  this.idade = idadeAtt;
  this.peso = pesoAtt
  let estaAptoServir = `Senhor ${this.nome}, você está apto a servir!`;
  let naoEstaAptoServir = `Senhor ${this.nome}, o senhor NÃO está apto a servir!`
  this.estaApto = () => {
    if((this.idade >= 18 && this.idade <= 25) && (this.peso >= 60 && this.peso <= 85)) {
      return estaAptoServir;
    } else {
      return naoEstaAptoServir;
    }
  }
}

const well = new Pessoa('Wellington', 19, 65)

console.log(well.estaApto())




function Carro(marcaAtt, rodasAtt, corAtt) {
  this.marca = marcaAtt;
  this.rodas = rodasAtt;
  this.cor = corAtt;
  this.ligar = () => {
    if(this.rodas == 4) {
      console.log("VRUUUUUUUUUUM")
    } else if(this.rodas <= 3) {
      console.log("Está faltando rodas mano KKKKKK")
    }
  }
}

const honda = new Carro('Honda', 3, 'Preto')


console.log(honda.ligar())



// Criar uma funcao construtora que adiciona elemento e colocar classe 'ativa'

function Dom(elementoAtt, classeAtt) {
  this.elemento = elementoAtt;
  this.nomeClasse = classeAtt;
  this.selecionaElemento = document.querySelector(this.elemento);
  this.criar = () => {
    this.selecionaElemento.classList.add(this.nomeClasse)
  }
}

const li = new Dom('li', 'ativo');
li.criar()





// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nomeAtt, idadeAtt) {
  this.nome = nomeAtt;
  this.idade = idadeAtt;
  this.andar = () => {
    console.log(`${this.nome} andou`)
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João', 20)
const maria = new Pessoa('Maria', 25)
const bruno = new Pessoa('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(elementAtt, classAtt) {
  this.element = elementAtt;
  this.className = classAtt;
  this.getElement = document.querySelector(this.element)
  this.addClass = () => {
    this.getElement.classList.add(this.className)
  }
  this.removeClass = () => {
    this.getElement.classList.remove(this.className)
  }
}

const ul = new Dom('ul', 'ativo');
ul.addClass()
ul.removeClass()
ul.addClass()