//map -> aplicar uma função a cada um dos elementos do array e retorna um array modificado

let numeros = [1,2,3,4,5]
let dobro = numeros.map((item)=> item*2)

console.log(numeros, dobro)

//forEach -> aplica uma função recebendo como parâmetro cada item do array e NÃO RETORNA nada
/*let triplo = numeros.forEach((item)=> console.log(item))
console.log(triplo)*/

numeros.forEach((numero)=>imprimir(numero))

function imprimir(info){
    console.log(info)
}