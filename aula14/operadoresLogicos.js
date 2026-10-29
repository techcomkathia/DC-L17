let numero = 5
let numeroString = "5"

// valores das variaveis numero e numeroString são iguais 
// igualdade fraca ==  se avalia apenas o valor
console.log( numero == numeroString) // true
//diferença fraca != se avalia apenas o valor
console.log( numero != numeroString) // false

// igualdade forte ou estrita === se avalia o valor e o tipo são iguais
console.log( numero === numeroString) // false
// valor E o tipo são diferentes
console.log( numero !== numeroString) // true

let senha =  "123Mudar"
let senhaDigitada = "123mudar"
console.log( senha === senhaDigitada)