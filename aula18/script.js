/* 
let objeto = {
    chave: valor,
    chave2: valor2
}
*/

let animal ={
    nome: 'Cleitinho',
    raca : 'srd',
    cor: 'laranja',
    idade: 14
}

console.log(animal)
console.log(animal.cor)
console.log(animal.idade)

//criar uma nova chave/ propriedade
animal.peso = 10
console.log(animal)

//acessando e atribuindo um novo valor a chaves que já existem os valores é atualizados

animal.idade = 15
console.log(animal)

//exclusão de uma propriedade
delete animal.idade
console.log(animal)

//para saber todas as chaves que existem em um objeto
console.log(Object.keys(animal))
const chavesObjeto = Object.keys(animal)
console.log(chavesObjeto.includes('coisa'))