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


Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a')
menu.forEach((item) => {
  item.classList += "ativa"
})




Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const menu = document.querySelectorAll('.menu a')
menu.forEach((item) => {
  item.classList.remove("ativa");
})

menu[0].classList.add('ativa')


// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelector('img')
console.log(imgs.hasAttribute('alt')) // True


// Modifique o href do link externo no menu
const menu = document.querySelectorAll('.menu a');
menu[3].setAttribute('href', 'modifiquei')
console.log(menu[3])
