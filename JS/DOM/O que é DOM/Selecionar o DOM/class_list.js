const menu = document.querySelector('.menu')

console.log(menu.className); // string
console.log(menu.classList); // lista de classes

menu.classList.add('ativo'); // Adiciona uma classe
menu.classList.add('ativo', 'mobile') // Duas classes
menu.classList.remove('ativo') // Remove uma classe
menu.classList.toggle('ativo') // adiciona/remove a classe
menu.classList.contains('ativo') // true ou false
menu.classList.replace('ativo', 'inativo') // Troca a classe


const menu = document.querySelector('.menu')
menu.classList.add('ativo')

menu.className += " opa"

if(menu.classList.contains('ativo')) {
    console.log("Contém ativo")
} else {
    console.log("Não contém ativo")
}

