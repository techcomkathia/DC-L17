let numeros = [1, 2, 3, 4, 5]
console.log(numeros)
console.log(numeros[0])
//todas a inserções serão os números por extenso

//inserir no início do array usar o método unshift
numeros.unshift('zero')
console.log(numeros)
//remover do início do array usar o método shift
let retorno = numeros.shift() 
console.log(numeros)
console.log(retorno)

//inserir no final da lista usar o método push()
numeros.push('seis')
console.log(numeros)

//remover do final da lista usar o método pop()
removido = numeros.pop()
console.log(numeros)
console.log(removido)
