// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = 'preto';
//   const marca = 'Fiat';
//   let portas = 4;
// }
// console.log(var, marca, portas);
// O primeiro porque var não é uma variável, o segundo e terceiro porque cont e let estão em um escopo.


// Como corrigir o erro abaixo?
// function somarDois(x) {
//   let dois = 2;
//   return x + dois;
// }
// function dividirDois(x) {
//   let dois = 2;
//   return x / dois;
// }
// console.log(somarDois(4));
// console.log(dividirDois(6));

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);