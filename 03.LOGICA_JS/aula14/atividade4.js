/*Escreva um algoritmo que leia três valores. A, B, C. 
E informe se a soma de A + B é:
maior que C;
menor que C; 
igual a C; 
*/

let a = Number(prompt("Digite o primeiro valor"))
let b = Number(prompt("Digite o segundo valor"))
let c = Number(prompt("Digite o terceiro valor"))

let soma = a + b

if (soma > c) {
    alert(`A soma de ${a} e ${b} é maior que ${c}`)
} else if (soma < c) {
    alert(`A soma de ${a} e ${b} é menor que ${c}`)
} else {
    alert(`A soma de ${a} e ${b} é igual a ${c}`)
}