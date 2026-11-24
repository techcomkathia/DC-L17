let nome = 'Teclado'
let preco = 99.90
let quantidade = 100
let estoque = 'true'
let imagem = 'url da imagem'
let cor = 'preto e cinza'

/* Atividade 2
Com as variáveis da primeira atividade vamos realizar algumas operações. 
Atualize o valor do produto para 10% a menos e exiba o novo valor no console com o texto "O novo valor do produto é R$ valor com o desconto de 10%"
Peça ao usuário a quantidade de itens que ele deseja desse produto. Atualize o estoque e em seguida mostre o total da compra em um alert
*/

preco = preco - (preco * 0.1)
const desconto = 0.1
preco = preco * (1- desconto)
console.log( `O novo valor do produto é R$ ${preco} com o desconto de 10%`)

//pede ao usuario a quantidade de produtos
let qtdCompra = prompt(`Para o produto ${nome} da cor ${cor} temos ${quantidade} unidades em estoque, quantos itens deseja comprar?`)
//atualizar o tipo do dado da variável qtdCompra
qtdCompra = parseInt(qtdCompra) // parseInt transforma um texto em um número inteiro
//atualizar o estoque
console.log( quantidade)
quantidade = quantidade - qtdCompra
console.log( quantidade)
//exibir o total da compra
alert(`O total da compra foi de R$ ${preco * qtdCompra}`)

