//A Black Fraude do Cleitinho está chegando, os preços dos produtos acima dos 500 reais devem ter um desconto de 10%. Você deve conservar o valor do produto no array original e montar um array cópia com os preços modificados

let produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Mouse', preco: 129.49, fragil: true},
    {nome: 'Cadeira', preco: 699.99, fragil: false},
    {nome: 'Monitor', preco: 999.99, fragil: true},
    {nome: 'Cadeira Gamer', preco: 9999.99, fragil: false},
    {nome: 'Teclado', preco: 99.99, fragil: true}
]

let produtosDesconto = produtos.map((prod) => {
    let prodDesconto = {...prod} 
    //o produto original não seja modificado (comportamento exclusivo para trabalho com objetos, NÃO É um comportamento do map)
    if(prodDesconto.preco > 500){
        prodDesconto.preco = prodDesconto.preco * 0.9
    }
    return prodDesconto
    
})