let objeto1 = {
    qtd:10,
    nome: "coisa1"
}

let copiaObj =  objeto1
let outroObjeto = {...objeto1}

console.log(objeto1)
console.log(copiaObj)
console.log(outroObjeto)

//alteração de valor no objeto1
objeto1.qtd = 200

console.log(objeto1)
console.log(copiaObj)
console.log(outroObjeto)

let variavel1 = 10
let variavel2 = variavel1

console.log(variavel1)
console.log(variavel2)

variavel1 = 20

console.log(variavel1)
console.log(variavel2)