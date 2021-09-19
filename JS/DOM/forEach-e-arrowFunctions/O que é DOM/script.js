// let imgs = document.querySelectorAll('img')
// imgs.forEach(function(index, item, lista) {
//     console.log(index)
//     console.log(item)
//     console.log(lista)
// })


// EXERCICIOS

// Mostre no console cada parágrado do site
let paragrafo = document.querySelectorAll('p')
paragrafo.forEach(function(item, index, lista) {
    console.log(item)
    console.log(index)
    console.log(lista)
})

// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);