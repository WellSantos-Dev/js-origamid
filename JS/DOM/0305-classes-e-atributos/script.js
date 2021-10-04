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