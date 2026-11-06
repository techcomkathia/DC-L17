/*Leia o valor de um saque e mostre quantas notas de cada valor são necessárias para pagá-lo com a menor quantidade possível de notas. Use notas de 100, 50, 20, 10, 5, 2 e 1 real.*/

let valorSaque = parseInt(prompt('Digite o valor do saque'))
let valor = valorSaque

let notas100 = 0
let notas50 = 0
let notas20 = 0
let notas10 = 0
let notas5 = 0
let notas2 = 0
let notas1 = 0

for(let i=1; i<=valorSaque; i++){
    if(valor >= 100){
        notas100++
        valor -= 100
    } else if (valor >= 50){
        notas50++
        valor -= 50
    } else if (valor >= 20){
        notas20++
        valor -= 20
    } else if (valor >= 10){
        notas10++
        valor -= 10
    } else if (valor >= 5){
        notas5++
        valor -= 5
    } else if (valor >= 2){
        notas2++
        valor -= 2
    } else if (valor >= 1){
        notas1++
        valor -= 1
    }

}

//alternativamente podemos fazer com o while
while(valor > 0){
    if(valor >= 100){
        notas100++
        valor -= 100
    } else if (valor >= 50){
        notas50++
        valor -= 50
    } else if (valor >= 20){
        notas20++
        valor -= 20
    } else if (valor >= 10){
        notas10++
        valor -= 10
    } else if (valor >= 5){
        notas5++
        valor -= 5
    } else if (valor >= 2){
        notas2++
        valor -= 2
    } else if (valor >= 1){
        notas1++
        valor -= 1
    }
}


console.log(`Notas de 100: ${notas100}`)
console.log(`Notas de 50: ${notas50}`)
console.log(`Notas de 20: ${notas20}`)
console.log(`Notas de 10: ${notas10}`)
console.log(`Notas de 5: ${notas5}`)
console.log(`Notas de 2: ${notas2}`)
console.log(`Notas de 1: ${notas1}`)