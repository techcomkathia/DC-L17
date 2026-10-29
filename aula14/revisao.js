// tipos de dados

// string
// number
// boolean
// null
// undefined

// declaração e atribuição
let palavra = "Ola mundo"
// atualização de valor
palavra = 'outro texto'
console.log( typeof palavra)
let numero = 10
console.log( typeof numero)
numero = 20.5
console.log( typeof numero)
let booleano = true
booleano= false
console.log( typeof booleano)

let nulo = null
let senhaUsuario = null //a variável é criada e espera a reatribuição de valor
console.log( typeof nulo)
//let indefinido = alert('oi')
//console.log( typeof indefinido)



/*------------------ Operações com os operadores aritméticos ---------------------*/

let numero1 = 10 // typeof number
let numero2 = 5 // typeof number
let numeroPalavra = "10" // typeof string

//soma +
console.log(numero1 + numero2) //15 number
// para numbers realiza a soma

//para strings concatena
console.log( numero1 + numeroPalavra) //1010 string
console.log( numeroPalavra + 10 + 5) //1010 string

console.log( Number(numeroPalavra)) //10 number
console.log(Number("150.68")) //converte para numero no formato que está escrito inteiro ou decimal
console.log(parseInt("150.68")) //converte para inteiro
console.log(parseFloat("150.68")) //converte para decimal

/*let numeroUsuario = prompt("Digite um numero")
console.log( typeof numeroUsuario)
console.log( Number(numeroUsuario))
*/

/* Para as demais operações que em nenhuma etapa envolva uma soma é possivel utilizar números no formato string*/

console.log("10"-8) // subtração com numero no formato de string
console.log(10 - 8)
console.log("10"*8) //multiplicação
console.log("10"/8) //divisão
console.log("10" % 8) //resto da divisão inteira
console.log(2 * 2 * 2)
console.log(2 ** 3)
console.log("10"**20)

// poder não é dever. Então preferencialmente faça a conversão de tipo antes de utilizar qualquer operador aritmético


//operadores de reatribuição
//joão tem 5 maçãs e ganha mais 2 como atualizar a variável que armazena o valor das maçãs

let macas = 5
macas = macas + 2
console.log( macas)

// vai utilizar como referencia para soma o valor da própria variável que está sendo atualizada
let macas2 = 5
macas2 += 2
console.log( macas2)