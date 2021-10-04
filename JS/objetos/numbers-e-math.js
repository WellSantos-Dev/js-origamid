// parseFloat() serve para retornarmos um número a partir de cada String. A string deve começar com um númeto. parseInt() recebe também um segundo parametro que é o Radix, 10 é para decimal.


console.log(parseFloat('1234.1234'))
console.log(parseInt('100 reais'))
console.log(parseInt('99.5', 10))

// n.toFixed(); Arredonda o numero
const preco = 29.90
console.log(preco.toFixed())

// n.toString() Transforma numero em String
console.log(typeof preco.toString())
