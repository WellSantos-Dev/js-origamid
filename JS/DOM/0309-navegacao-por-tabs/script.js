const listaAnimais = document.querySelectorAll('.js-listaAnimais li')
const listaContent = document.querySelectorAll('.js-listaContent section')
listaContent[0].classList.add('ativo')

function criaClass(index) {

  listaContent.forEach((item) => {
    item.classList.remove('ativo')
  })

  listaContent[index].classList.add('ativo')
}

listaAnimais.forEach((itemMenu, itemIndex) => {
  itemMenu.addEventListener('click', () => {
    criaClass(itemIndex)
  })
})

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou`
}

const well = new Pessoa('Wellington', 19)
