//mostre apenas os números que são divisíveis por 2 

let numero = 15

if(numero % 2 == 0){
    console.log(`O numero ${numero} é divisível por 2`)
}

// else{
//     console.log(`O numero ${numero} nao é divisível por 2`)
// }

// uma validação para saber se um número é par ou ímpar: só existe uma condição a ser testada e 2 possibilidades de resposta

// testando 2 condições de uma vez : operador and && ou operador or ||
//mostre se o número é divisível por 2 e por 5 ao mesmo tempo

if(numero % 2 == 0 && numero % 5 == 0){
    console.log(`O numero ${numero} é divisível por 2 e por 5`)
}

// else{
//     console.log(`O numero ${numero} nao é divisível por 2 e por 5`)
// }


//mostre os números que são divisíveis por 2 ou por 5
if(numero % 2 == 0 || numero % 5 == 0){
    console.log(`O numero ${numero} é divisível por 2 ou por 5`)
}
