// Seleciona pelo ID
let animais = document.getElementById('animais');
// Seleciona por classe
const gridSection = document.getElementsByClassName('grid-section');
// Seleciona por tag
const contato = document.getElementsByTagName('ul');


// Selecionando por tag
const ul = document.getElementsByTagName('ul');
console.log(ul);

// ^ (começa com)
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

// Selectiona tudo
const img = document.querySelectorAll('.animais img');
console.log(img)