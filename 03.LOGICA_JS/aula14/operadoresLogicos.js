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


console.log(2<4) // true
console.log(2>=1) // true
console.log(2<=2) // true
console.log(2>=4) // false
console.log(2!=4) // true
console.log(!(2==4)) // !false -> true


// leia o nome de um(a) aluno(a), 3 notas e calcule a média aritmética. Caso a média for maior ou igual a 7, exiba "O aluno(a) <nome> foi Aprovado(a)", caso contrário, exiba "Aluno(a) <nome> Reprovado(a)"