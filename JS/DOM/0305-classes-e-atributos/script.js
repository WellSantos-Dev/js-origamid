const menu = document.querySelector('.menu')

console.log(menu)

menu.classList.add('ola')
menu.classList.remove('ola')


if(menu.classList.contains('ola')) {
  menu.classList.toggle('ola')
} else {
  menu.classList.toggle('ola')
}

console.log(menu.classList[2])

const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste')
menu.classList.remove('azul')
menu.classList.toggle('azul')

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul')
} else {
  console.log("Não possui azul")
}

console.log(menu.classList);




const animais = document.querySelector('.animais')
animais.setAttribute('src', 'https://www.google.com')
animais.setAttribute('alt', 'É uma raposa')
let existeAlt = animais.hasAttribute('alt');
console.log(existeAlt)
console.log(animais.attributes[4].value)