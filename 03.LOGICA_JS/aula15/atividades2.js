/*A03-Q03
Leia um limite e exiba todos os números pares de 0 até ele.*/

// processo repetitivo : testar se o número é par ou não. SE for par mostar no console.
// as informações que precisamos: o número limite e o numero inicial

let limite = Number(prompt("Digite um limite"))
let numeroInicial = 0

while(numeroInicial <= limite){

    if(numeroInicial % 2 ==0){
        console.log(numeroInicial)
    }

    // atualizar a variável que controla o laço
     numeroInicial++

}