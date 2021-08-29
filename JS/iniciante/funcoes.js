// Crie uma função para verificar se um valor é Truthy
function isTrue(index) {
  if(!!index === true) {
    console.log("It's true!")
  } else if (!!index === false) {
    console.log("It's false!")
  }
}

a = '';

isTrue(a)




// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  area = lado * 4;
  return area;
}

console.log(`Perimetro do quadrado: ${perimetro(4)}`);




// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(name, surname) {
  if (name == "Wellington") {
    let adm = "Você é administrador do sistema"
    return name + ' ' + surname + ': ' + adm;
  } else {
    notAdm = "Você é usuário comum do sistema";
    return name + '' + surname + ': ' + notAdm;
    }
}

console.log(nomeCompleto("Wellington", "Santos"))

// Aproveitando, tive uma ideia de criar um sistema de login :D

function login(senha) {
  if (senha === 123) {
    return console.log("Situação: Logado");
  } else {
    return console.log("Senha incorreta");
  }
}

login(123);




// Crie uma função que verifica se um número é par


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(tipo) {
  if (typeof tipo === "number") {
    console.log("Its a number");
  } else if (typeof tipo === "string") {
    console.log("Its a string");
  } 
}

tipoDeDado("a");




// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
// addEventListener('scroll', function() {
//   console.log("Wellington Santos");
// });



//Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));

// O problema era o escopo de uma variável (Estava declarada em uma função e quando fui chamar em outra ocorreu o erro 'not defined'). O outro erro é que quando tem return precisa dar console.log...



// function areaQuadrado(area) {
//   return area * area;
// }

// console.log(areaQuadrado(16));



// function pi() {
//   return 3.14;
// }

// let total = pi() * pi();

// console.log(total)




// function imc(peso, altura, deficiencia) {
//   if (deficiencia === true) {
//     console.log("Consta no sistema que você possui deficiencia, logo seu IMC é calculado diferente.");
//     let imc = peso / (altura * 1);
//     return imc;
//   } else if (deficiencia === false) {
//     console.log("Conta no sistema que você não possui deficiencia.");
//     let imc = peso / (altura ** 2);
//     return imc;
//   }
// }

// console.log(imc(65, 1.72, false));




// function corFavorita(cor) {
//   if (cor === "azul") {
//     console.log("Você gosta do céu");
//   } else if (cor === "verde") {
//     console.log("Você gosta do mato");
//   } else if (cor === "cinza") {
//     console.log("Você gosta da cidade");
//   } else {
//     console.log("Você não gosta de nada!")
//   }
// }

// corFavorita()




// function imc2(peso, altura) {
//   let imc2 = peso / (altura ** 2);
//   return imc2;
// }

// console.log(imc2(65, 1.72));





// function terceiraIdade(idade) {
//   if (typeof idade !== 'number') {
//     console.log("Por favor, informe uma idade válida.");
//   } else if (idade > 60) {
//     return true;
//   } else if (idade < 60) {
//     return false;
//   }
// }

// console.log(terceiraIdade("a"))