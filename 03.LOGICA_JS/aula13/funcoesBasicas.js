// todas as funções básicas são nativas do JS porém algumas precisam do navegador para funcionar. ex: alert, confirm, prompt, etc.

// o alert apenas mostra a informação na tela, não retorna nada
/*let retorno = alert('Ola mundo')
console.log( retorno) // undefined


// undefinide é diferente de null, pois null significa que a variável foi declarada mas nenhuma informação foi atribuida de forma intensional. 

// o confirm mostra um dialogo de confirmação e retorna um booleano (verdadeiro ou falso)
retorno = confirm('Tem certeza?')
console.log( retorno)


// o prompt mostra um dialogo de entrada de dados e retorna uma string
retorno = prompt('Qual seu nome?')
console.log( retorno)
console.log( typeof retorno)

retorno = prompt('Qual sua idade?')
console.log( retorno)
console.log( typeof retorno)
*/


/* -----------------------------------Funções de conversão de tipos-------------------------------------------------*/

const numero = "100.01"
// parseInt transforma um texto em um número inteiro
let numeroInteiro = parseInt(numero)
console.log( numeroInteiro)
// parseFloat transforma um texto em um número decimal
let numeroDecimal = parseFloat(numero)
console.log( numeroDecimal)
// Number transforma um texto em um número - de acordo como ele foi escrito
let numeroConvertido = Number(numero)
console.log( numeroConvertido)
numeroConvertido = Number("10")
console.log( numeroConvertido)


// console.log
// alert 
// prompt
// Number
// parseInt ou parseFloat


console.log (`Exemplo de tamplate string ${numeroInteiro} para usar o valor de uma variável use ${numeroInteiro}`)
console.log("Concatenação de texto " + numeroInteiro + " para usar o valor de uma variável use " + numeroInteiro)