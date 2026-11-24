// peça 4 informações sobre um produto e armazene em um array
//nome (string)
//preço (number)
//quantidade em estoque (number)
//disponibilidade (booleano)
let produto = [] // inicar com um array vazio para trabalhar com os indexs
produto[0] = prompt('Digite o nome do produto')
produto[1] = prompt('Digite o preco do produto') //indicando manualmente o index
produto[produto.length] = prompt('Digite a quantidade do produto') //utilizando o length para adicionar
produto[produto.length] = confirm('O produto está disponível: ok para sim e cancelar para nao') //utilizando o length para adicionar
console.log(produto)
//mostre informação por informação no console, no seguinte formato:
//nome : nomeProd
console.log(`nome: ${produto[0]}`)
// preço : R$ preçoProd
console.log(`preco: R$ ${produto[1]}`)
// quantidade: qtdProd
console.log(`quantidade: ${produto[2]}`)
// disponibilidade: disponibilidadeProd
console.log(`disponibilidade: ${produto[3]}`)

//opcionalmente trabalhar com if/else ou ternário para mostrar a disponibilidade em texto mais adequado.

//atualize a quantidade para 0 e a disponibilidade para false
produto[2] = 0
produto[3] = false
// mostre o array no console ( todas as infos juntas)
console.log(produto)
