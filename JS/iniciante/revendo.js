// ================ VARIAVEIS ====================

// // Declarar uma variável com o seu nome
// let nome = 'Wellington';
// // Declarar uma variável com a sua idade
// let idade = 19;
// // Declarar uma variável com a sua comida
// // favorita e não atribuir valor
// let comidaFavorita;
// // Atribuir valor a sua comida favorita
// comidaFavorita = 'pizza';
// // Declarar 5 variáveis diferentes sem valores
// let nome;
// let idade;
// let endereco;
// let user;
// let senha;


// ============== TIPOS DE DADOS ===================

// // Declare uma variável contendo uma string
// let nome = "Wellington";
// // Declare uma variável contendo um número dentro de uma string
// let token = '41234123';
// // Declare uma variável com a sua idade
// let idade = 19;
// // Declare duas variáveis, uma com seu nome
// // e outra com seu sobrenome e some as mesmas
// let sobrenome = "Matheus";
// let nomeCompleto = nome + ' ' + sobrenome;
// console.log(nomeCompleto);
// // Coloque a seguinte frase em uma variável: It's time
// let its = "itsTime";
// // Verifique o tipo da variável que contém o seu nome
// console.log(typeof (nome));


// ============== NUMEROS E OPERADORES ======================
// // Qual o resultado da seguinte expressão?
// var total = 10 + 5 * 2 / 2 + 20; //Resposta : 35
// // Crie duas expressões que retornem NaN
// let idade = 'Teste';
// console.log(++idade);
// // Somar a string '200' com o número 50 e retornar 250
// let strNumber = '200';
// let number = 50;
// let soma = Number(strNumber) + number;
// console.log(soma);
// // Incremente o número 5 e retorne o seu valor incrementado
// let numberFive = 5;
// numberFive++;
// console.log(numberFive);
// // Como dividir o peso por 2?
// var numero = '80';
// var unidade = 'kg';
// var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)
// console.log(pesoPorDois)

// ================ BOOLEAN E CONDICIONAIS ========================
// // Verifique se a sua idade é maior do que a de algum parente
// // Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
// let idadePrimo = 18;
// let minhaIdade = 18;
// if (minhaIdade > idadePrimo) {
//     console.log("Minha idade é maior");
// } else if (minhaIdade == idadePrimo) {
//     console.log("A idade do meu primo e a minha idade é igual.");
// } else {
//     console.log("A idade dele é maior")
// }
// // Qual valor é retornado na seguinte expressão?
// var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // 3
// console.log(expressao);
// // Verifique se as seguintes variáveis são Truthy ou Falsy
// var nome = 'Andre';
// console.log(!nome);
// var idade = 28;
// console.log(!idade);
// var possuiDoutorado = false;
// console.log(!possuiDoutorado);
// var empregoFuturo;
// console.log(empregoFuturo);
// var dinheiroNaConta = 0;
// console.log(dinheiroNaConta);
// // Compare o total de habitantes do Brasil com China (valor em milhões)
// var brasil = 207;
// var china = 1340;
// let total = brasil + china;
// console.log(`O valor total de habitantes é de: ${total} milhões.`);
// // O que irá aparecer no console?
// if (('Gato' === 'gato') && (5 > 2)) {
//     console.log('Verdadeiro');
// } else {
//     console.log('Falso');
// } // Falso
// // O que irá aparecer no console?
// if (('Gato' === 'gato') || (5 > 2)) {
//     console.log('Gato' && 'Cão');
// } else {
//     console.log('Falso');
// }


// ================== FUNCOES =======================
// Crie uma função para verificar se um valor é Truthy
// function verificaValor(valor) {
//     if (!valor) {
//         console.log("False")
//     } else if (!!valor) {
//         console.log("True")
//     }
// }
// verificaValor('a');
// // Crie uma função matemática que retorne o perímetro de um quadrado
// // lembrando: perímetro é a soma dos quatro lados do quadrado
// function perimetroQuadrado(q1) {
//     let multi = q1 * 4;
//     console.log(multi)
// }
// perimetroQuadrado(40);
// // Crie uma função que retorne o seu nome completo
// // ela deve possuir os parâmetros: nome e sobrenome
// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`;
// }
// console.log(nomeCompleto("Wellington", "Santos"))
// // Crie uma função que retorne o tipo de
// // dado do argumento passado nela (typeof)
// function verificaDado(type) {
//     if (!type) {
//         return "Falso";
//     } else if (!!type) {
//         return "Verdadeiro";
//     }
// }
// console.log(verificaDado(''));
// // Corrija o erro abaixo
// var totalPaises = 193;
// function precisoVisitar(paisesVisitados) {
//     return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//     return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// console.log(precisoVisitar(20));
// console.log(jaVisitei(20));


// ================ OBJETOS ===================
// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
// let pessoaUm = {
//     nome: "Wellington",
//     sobrenome: "Santos",
//     idade: 19,
//     falar(index) {
//         if (index == "s") {
//             console.log(`${this.nome} está falando!`);
//         } else if (index == "n") {
//             console.log(`${this.nome} não vai falar!`);
//         } else {
//             console.log("Digite 's' ou 'n'");
//         }
//     }
// }

// console.log(pessoaUm.falar('s'));
// // Crie um método no objeto anterior, que mostre o seu nome completo
// pessoaUm.nomeCompleto = `${pessoaUm.nome} ${pessoaUm.sobrenome}`;
// console.log(pessoaUm.nomeCompleto);

// // Modifique o valor da propriedade preco para 3000
// var carro = {
//     preco: 1000,
//     portas: 4,
//     marca: 'Audi',
// }

// carro.preco = 3000;
// console.log(carro.preco);

// // Crie um objeto de um cachorro que represente um labrador,
// // preto com 10 anos, que late ao ver um homem

// let labrador = {
//     especie: "labrador",
//     cor: "preto",
//     idade: 10,
//     latir(viuHomem) {
//         if (viuHomem === 's') {
//             console.log(this.especie + ": AUAUAU")
//         } else if (viuHomem === 'n') {
//             console.log(this.especie + ": Olá, excelencia kkkk")
//         } else {
//             console.log("Digite 's' ou 'n'");
//         }
//     }
// }

// labrador.latir('n');




// =============== ARRAYS =========================
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
// let winsBr = [1959, 1962, 1970, 1994, 2002];

// // Interaja com a array utilizando um loop, para mostrar
// // no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
// for (let i = 0; i < winsBr.length; i++) {
//     console.log(`O brasil ganhou a copa nos anos: ${winsBr[i]}`);
// }

// // Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// // Coloque a última fruta da array acima em uma variável,
// // sem remover a mesma da array.
// melancia = frutas[4];
// console.log(melancia);
// console.log(frutas);




// ========== ATRIBUIÇÃO E TERNÁRIO =============
// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
// var scroll = 1000;
// scroll += 500;
// console.log(scroll)

// // Atribua true para a variável darCredito,
// // caso o cliente possua carro e casa.
// // E false caso o contrário.
// var possuiCarro = true;
// var possuiCasa = true;

// let darCredito = (possuiCarro && possuiCasa) ? "Dar credito" : "False";
// console.log(darCredito)
