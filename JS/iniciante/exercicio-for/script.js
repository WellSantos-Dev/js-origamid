const elementos = [
  { tag: 'h1', texto: 'Titulo' },
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' }
]


  let container = document.querySelector('.container')

  for(let i = 0; i < elementos.length; i++) {
    container.innerHTML += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`
  }
