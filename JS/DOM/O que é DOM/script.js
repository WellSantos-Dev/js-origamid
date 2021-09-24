const h1 = document.querySelector('h1');

function callback() {
  console.log("Chamando uma função externa no addEventListener")
}

h1.addEventListener('click', function() {
  console.log("Olá", callback())
})

ATIVIDADE:

// Retorne o url da página atual utilizando o objeto window
let url = window.location.href;
console.log(url)


// Seleciona o primeiro elemento da página que
// possua a classe ativo
let ativo = document.querySelector('.ativo').classList;
console.log(ativo)

// Retorne a linguagem do navegador
let linguagem = navigator.language;
console.log(linguagem)


// Retorne a largura da janela 
let largurajanela = window.screen.height;
console.log(largurajanela)