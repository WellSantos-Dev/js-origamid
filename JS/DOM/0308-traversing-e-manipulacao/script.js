
// lista.parentElement; // Pai
// lista.parentElement.parentElement; // Pai do pai
// lista.previousElementSibling // Elemento acima
// lista.nextElementSibling // Elemento abaixo

// const animais = document.querySelector('.animais')
// const lista = document.querySelector('.animais-lista')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')
// const mapa = document.querySelector('.mapa')

// lista.appendChild(titulo) // appendChild move par ao filho do conteudo
// animais.appendChild(contato) 

// contato.insertBefore(animais, mapa) // insere animais antes de mapa
// contato.removeChild(titulo) // Remove titulo de contato
// contato.replaceChild(lista, titulo) // Substitui a lista pelo titulo

// const novoh1 = document.createElement('h1')
// novoh1.innerText = "Ola, amigo"
// novoh1.classList.add('titulo')

// contato.appendChild(novoh1)

// const h1 = document.querySelector('h1')
// cloneh1 = h1.cloneNode(true)
// cloneh1.classList.add('azul')
// mapa.appendChild(cloneh1)


// EXERCICIOS

// Duplique o menu e adicione ele em copy
const copy = document.querySelector('.copy')
const menu = document.querySelector('.menu')
const newMenu = menu.cloneNode(true)

copy.appendChild(newMenu)

// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais