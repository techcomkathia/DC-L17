let animal = {
    nome: 'Cleitinho',
    cor: 'laranja'
}

console.log(animal.nome)


let animal2 = {
    "nome": "Cleitinho",
    "cor": "laranja"
}

console.log(animal2.nome)
//conversão de objeto para string (json)
let animal3 = JSON.stringify(animal)
console.log(animal3.nome)
//converte JSON(texto) para objeto
console.log(JSON.parse(animal3).nome)



