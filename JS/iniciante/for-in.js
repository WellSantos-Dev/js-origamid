let frutas = ['Maçã', 'Pera', 'Banana', 'Tomate']

for(let i in frutas) {
  console.log(frutas[i])
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.falar = () => {
    console.log(`${this.nome} está falando!`)
  }
}

const well = new Pessoa('Wellington', 19)

for(let i in well) {
  console.log(well[i])
}