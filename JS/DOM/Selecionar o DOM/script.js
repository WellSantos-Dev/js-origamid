// Seleciona pela ID
let animais = document.getElementById('animais');
console.log(animais)

// Seleciona pela classe, retorna uma HTMLCollection
let gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection)
let contato = document.getElementsByClassName('grid-section contato');
console.log(contato)


// Retorna todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');
console.log(ul[1].innerHTML)