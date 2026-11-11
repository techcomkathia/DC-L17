//leia 4 números: se pares, adicione na lista de pares, se ímpares

let pares = []
let impares = []

//laço de repetição for e condicionais (if/else)

for (let i = 0; i <= 10; i++) {
    let num = parseInt(prompt('Digite um número'))
    if (num % 2 == 0) {
        pares.push(num)
    } else {
        impares.push(num)
    }
}
console.log(pares)
console.log(impares)