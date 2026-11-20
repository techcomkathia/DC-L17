let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numerosDobro =  numeros.map((item)=> item*2)
//map não modifica o array orginal, ele retorna um array novo

console.log(numerosDobro)
console.log(numeros)

let pets = [
    {nome: 'bob', tipo: 'cachorro'},
    {nome: 'rex', tipo: 'cachorro'},
    {nome: 'garfield', tipo: 'gato'}
]
//todos os pets receberão o atributo castrados porém sem modificar o array original
let petsCastrados = pets.map((pet) => {
   let petCastrado = {...pet}
   petCastrado.castrados = true
   return petCastrado
})
//então todas as vezes que o array original de objetos tiver que ser mantido sem alterações, usar o spread operator para criar uma cópia do objeto por valor.

console.log(petsCastrados)
console.log(pets)
//o método filter retorna apenas os elementos que passarem em uma determinada condição

let numerosPares = numeros.filter((numero)=> {
    if (numero % 2 === 0){
        return true
    }   
})
console.log(numerosPares)

let total = numeros.reduce((acumulador, item)=> acumulador + item)
console.log(total)

let valorAnterior = 1000
//o parametro opcional é o valor inicial 
let total2 = numeros.reduce((acumulador, item)=> acumulador + item, valorAnterior)
console.log(total2)



