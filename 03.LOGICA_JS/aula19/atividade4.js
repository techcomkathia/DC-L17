
// para o array de produtos temos muitas operações que podem ser feitas: 
/* - calculo de desconto, ajuste de estoque, remoção de produtos e ect... */
//Função de cálculo de desconto: a função recebe um produto e aplica o desconto no atributo preco do produto.
// Função recebe um produto e modifica o atributo estoque do produto: se true altera para false e vice-versa

// Crie uma função que receba um array de produtos e um callback, e execute essa funcao para cada produto do array


let produtos = [
    { nome: 'poduto 1', preco: 10, estoque: true },
    { nome: 'produto 2', preco: 20, estoque: false },
    { nome: 'produto 3', preco: 30, estoque: true }
]
//Importante: qualquer alteração feita na cópia de um objeto é aplicada a referência do objeto original. Caso deseje manter o objeto original, use o spread operator (...)
//Exemplo: const novoObjeto = { ...objetoOriginal }


function calcularDesconto(produto, desconto){
    console.log(produto)
    let percentual = 1 - desconto
    produto.preco =  produto.preco * percentual
    console.log(produto)    
}

function alterarEstoque(produto){
    //console.log(produto) //antes das alterações
    produto.estoque = produto.estoque ? false: true // se true altera para false e vice-versa
    //console.log(produto) //depois das alterações
}

function modificarArray(arrayProdutos, funcao, valor=0){
    //percorrer o array aplicando a função a cada elemento
    //acompanhar a modificação 
    console.log(arrayProdutos)
    for(let i=0; i < arrayProdutos.length; i++){
        funcao(arrayProdutos[i], valor)
    }
    console.log(arrayProdutos)
}

modificarArray(produtos, alterarEstoque)
modificarArray(produtos, calcularDesconto, 0.1)

