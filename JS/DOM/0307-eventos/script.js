// const img = document.querySelector('img')

// img.addEventListener('click', () => console.log('clicou'))

const img = document.querySelector('img')

callback = (event) => console.log(event);
img.addEventListener('click', callback)