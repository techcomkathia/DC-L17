let frutas = ['maçã', 'laranja', 'banana', 'uva']

console.log( frutas.length )
console.log( frutas )
console.log( frutas[0] )
console.log( frutas[1] )
console.log( frutas[2] )
console.log( frutas[3] )

//acessar um indice que ainda não possui informação 
console.log( frutas[4])

//acessar e substituir uma informação
frutas[0] = 1
console.log( frutas )

//adicionar um novo item ao array
frutas[4] = 'melancia'
console.log( frutas )

//frutas.length == 5
frutas[frutas.length] = 'kiwi'
console.log( frutas )

//acesso um indice que não é o proximo do array
frutas[10]= 'fui inserido depois do ultimo indice'
console.log( frutas )