const nome = "Wellington"
const frutas = ['Banana', 'maça', 'Tomate']
for(let i = 0; i < nome.length; i++) {
  console.log(nome[i])
}

for(let i in nome) {
  console.log(nome[i])
}

for(let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}

for(let i in frutas) {
  console.log(frutas[i])
}


for(valor of frutas) {
  console.log(valor)
}