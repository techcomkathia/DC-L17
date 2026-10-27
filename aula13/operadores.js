//  aritmeticos:
/*
+ adição
- subtração
* multiplicação
/ divisão
% resto da divisão
** potência

*/

const x = 10
const y = 2

let resultado = x + y
console.log( resultado)
resultado = x - y
console.log( resultado)
resultado = x * y
console.log( resultado)
resultado = x / y
console.log( resultado)
resultado = 11 % y
console.log( resultado)
resultado = x ** y
console.log( resultado)
resultado = "10" + y // string + number produz uma concatenação 102
console.log( resultado)

// o js permite operações que não são soma, para números no formato de string

resultado = "10" - y // 10 - 2 = 8
console.log( resultado)
// para palavras (que não são números) o js retorna NaN (not a number)

resultado = "cleitinho" * 2 // cleitinho - 2 = NaN
console.log( resultado)

// qualquer operação que envolva um NaN resulta em NaN

resultado = NaN * 2 + y
console.log( resultado)