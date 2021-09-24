const title = document.querySelectorAll('titulo')
title.forEach(function (item) {
    console.log(title[item])
})

// Mostre no console cada parágrado do site
let paragrafo = document.querySelectorAll('p');
paragrafo.forEach(el => {
    console.log(el)
})

// Mostre o texto dos parágrafos no console
paragrafo.forEach(el => {
    console.log(el.innerHTML)
})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++)
});

imgs.forEach(() => i++);
console.log(i)