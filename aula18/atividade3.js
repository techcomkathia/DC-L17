

const produtos = [
    // Vestuário
    {
        nome: "Camiseta básica",
        categoria: "Vestuário",
        preco: 49.90,
        quantidade: 10,
        estoque: 25,
        desconto: 10
    },
    {
        nome: "Calça jeans",
        categoria: "Vestuário",
        preco: 129.90,
        quantidade: 5,
        estoque: 12,
        desconto: 15
    },
    {
        nome: "Vestido floral",
        categoria: "Vestuário",
        preco: 159.90,
        quantidade: 3,
        estoque: 8,
        desconto: 20
    },

    // Calçados
    {
        nome: "Tênis casual",
        categoria: "Calçados",
        preco: 199.90,
        quantidade: 4,
        estoque: 10,
        desconto: 5
    },
    {
        nome: "Sandália rasteira",
        categoria: "Calçados",
        preco: 79.90,
        quantidade: 6,
        estoque: 15,
        desconto: 10
    },
    {
        nome: "Bota feminina",
        categoria: "Calçados",
        preco: 249.90,
        quantidade: 2,
        estoque: 6,
        desconto: 25
    },

    // Acessórios
    {
        nome: "Bolsa transversal",
        categoria: "Acessórios",
        preco: 119.90,
        quantidade: 3,
        estoque: 7,
        desconto: 15
    },
    {
        nome: "Óculos de sol",
        categoria: "Acessórios",
        preco: 89.90,
        quantidade: 5,
        estoque: 20,
        desconto: 10
    },
    {
        nome: "Cinto de couro",
        categoria: "Acessórios",
        preco: 59.90,
        quantidade: 4,
        estoque: 9,
        desconto: 0
    }
];


/*{
        nome: "Camiseta básica",
        categoria: "Vestuário",
        preco: 49.90,
        quantidade: 10,
        estoque: 25,
        desconto: 10
    }*/

//você recebeu um desafio de organizar um array de produtos  no formato abaixo. Cada propriedade "produtos" do objeto que representa a categoria deve armazenar o array de produtos:
let vestuario = {
    categoria: 'vestuario',
    qtdProdutos: produtos.length,
    produtos: []
}

//dicas: laços de repetição, métodos de adição e remoção de elementos no array.
//Crie antes todos os objetos de categorias

for(let i = 0; i < produtos.length; i++){
    if(produtos[i].categoria === 'Vestuário'){
        vestuario.produtos.push(produtos[i])
    }
}