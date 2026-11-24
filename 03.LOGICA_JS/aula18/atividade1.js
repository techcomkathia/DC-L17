// Peça ao usuario informações: nome, preço, quantidade. Crie um objeto com essas informações e quando a quantidade for maior que 1 adicione a propriedade estoque: true. Caso contrário, adicione a propriedade estoque: false.

let produto={}

//adicione um desconto ao preço de 15%. Atualize o objeto com o novo valor. 
//Mostre todas as informações no console. 

produto.nome = prompt('Qual o nome do produto?')
produto.preco = Number(prompt('Qual o preço do produto?'))
produto.quantidade = Number(prompt('Quantos produtos existem?'))

if(produto.quantidade >= 1){
    produto.estoque = true
}else{
    produto.estoque = false
}

//alternativamente feita a partir do operador ternario
produto.estoque = produto.quantidade >= 1 ? true : false

//atualizar peço com o desconto de 15%
produto.preco = produto.preco * 0.85

console.log(produto)