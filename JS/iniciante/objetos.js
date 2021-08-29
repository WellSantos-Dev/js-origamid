// var person = {
//   name : 'Wellington',
//   surname : 'Matheus',
//   age : 19,
//   hasGraduation : true
// }

// console.log(person.name, person.surname)



// var quadrado = {
//   lados : 4,
//   area: function(lado) {
//     return lado * lado;
//   },
//   perimetro : function(lado) {
//     return lado * this.lados;
//   }
// }

// console.log(quadrado.perimetro(2))


let bike = {
  rodas : 4,
  estaGirando: function(quantidade) {
    return quantidade * this.rodas
  }
}

console.log(bike.estaGirando(3))