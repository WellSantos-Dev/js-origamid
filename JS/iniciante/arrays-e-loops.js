// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let winsBR = [1959, 1962, 1970, 1994, 2002]



// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
  for(let i = 0; i < winsBR.length; i++) {
  console.log(`O brasil ganhou a copa de ${winsBR[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let f = 0; f < frutas.length; f++) {
  console.log(frutas[f])
  if(frutas[f] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

let fruta = frutas[4];
console.log(fruta)


















// var videoGames = ['Switch', 'Xbox', 'PS5'];

// videoGames.push("3DS")
// console.log(videoGames)

// for(videoGame in videoGames){
//   console.log(videoGame)
// }