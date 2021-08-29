// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 20;
let idadePrimo = 19;

if (minhaIdade > idadePrimo) {
  console.log("Minha idade é maior");
} else if (minhaIdade === idadePrimo) {
  console.log("Minha idade é igual");
} else {
  console.log("Minha idade é menor")
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // Retorna 3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // True
var idade = 28; // True
var possuiDoutorado = false; // False
var empregoFuturo; // False
var dinheiroNaConta = 0; // False

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O Brasil tem mais habitantes que a China");
} else if (brasil === china) {
  console.log("O Brasil tem a mesma quantidade de habitantes do que a China");
} else {
  console.log("O Brasil tem menos habitantes do que a China")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) { // False, então retorna Falso
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) { // True, logo aparecerá "Cão"
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}