const comida = 'Pizza'
const agua = new String('Agua')





// str.length conta a quantidade de caracteres de uma determinada string

console.log(agua.length)
console.log(comida.length)

console.log(agua[1])
console.log(comida[comida.length -1])

console.log("--------------------------------")





//str.charAt(n) retorna o caracter de acordo com o index de (n)

const linguagem = 'JavaScript';

console.log(linguagem.charAt(0))
console.log(linguagem.charAt(2))

console.log(linguagem.charAt(linguagem.length -1))

console.log("--------------------------------")




// str.concat(str1, str2, ...) concatena as strings e retorna os resultados

const frase = "A melhor linguagem é "
const linguagemDeProg = "JavaScript"

const fraseCompleta = frase.concat(linguagemDeProg, '!')
console.log(fraseCompleta)

console.log("--------------------------------")




// str.includes(search, position) Procura pela string exata dentro de outra string. A procura é case sensitive.
// O segundo argumento quer dizer: Começa procurar a partir do..
const fruta = 'Banana'
const listaFrutas = 'Melancia, Banana, Laranja'

console.log(listaFrutas.includes(fruta))
console.log(fruta.includes(listaFrutas))
console.log(listaFrutas.includes(fruta, 13))

console.log("--------------------------------")




// str.endsWith(search) e str.startsWith(search) Procura pela string exata dentro de outra string. A procura é case sensitive
fruta.endsWith('nana')
fruta.startsWith('Ba')
fruta.startsWith('na')

console.log("--------------------------------")




// str.slice(start, end) Corta a string de acordo com os valores de star e end
const transacao1 = "Depósito de cliente"
const transacao2 = "Depósito de Fornecedor"
const transacao3 = "Depósito de Taxa de camisas"

console.log(transacao1.slice(0, 8))
console.log(transacao1.slice(0, transacao1.length))
console.log(transacao2.slice(12, transacao2.length))
console.log(transacao2.slice(12)) // Corta os 12 primeiros caracteres

console.log("--------------------------------")




// str.substring(start, end) Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice.
const linguagem1 = 'JavaScript'

console.log(linguagem1.substring(3, 5))
console.log(linguagem1.substring(0, 4))
console.log(linguagem1.substring(4))
console.log(linguagem1.substring(-3))




// str.indexOf(search) e str.lastIndexOf(search) Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado

const instrumento = 'Guitarra'
instrumento.indexOf('r')
instrumento.lastIndexOf('r')
instrumento.indexOf('ta')

console.log("--------------------------------")




// str.repeat(Num) Repete o numero de vezes do argumento passado
const ta = "ta"
console.log(ta.repeat(5))