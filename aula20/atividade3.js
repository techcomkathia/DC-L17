const produtos = [
  // Eletrônicos
  {
    id: 1,
    nome: "Fone de Ouvido Bluetooth",
    preco: 249.90,
    quantidade: 15,
    estoque: 42,
    categoria: "Eletrônicos"
  },
  {
    id: 2,
    nome: "Smartwatch Esportivo",
    preco: 389.00,
    quantidade: 8,
    estoque: 25,
    categoria: "Eletrônicos"
  },

  // Vestuário
  {
    id: 3,
    nome: "Camiseta Básica de Algodão",
    preco: 59.90,
    quantidade: 30,
    estoque: 120,
    categoria: "Vestuário"
  },
  {
    id: 4,
    nome: "Calça Pantalona em Moletinho",
    preco: 149.90,
    quantidade: 12,
    estoque: 35,
    categoria: "Vestuário"
  },

  // Casa & Cozinha
  {
    id: 5,
    nome: "Cafeteira Elétrica Programável",
    preco: 219.00,
    quantidade: 5,
    estoque: 18,
    categoria: "Casa & Cozinha"
  },
  {
    id: 6,
    nome: "Kit de Potes Herméticos (5 Peças)",
    preco: 89.90,
    quantidade: 22,
    estoque: 50,
    categoria: "Casa & Cozinha"
  },

  // Livros
  {
    id: 7,
    nome: "Clean Code: Habilidades Práticas do Agile Software",
    preco: 119.50,
    quantidade: 14,
    estoque: 20,
    categoria: "Livros"
  },
  {
    id: 8,
    nome: "Arquitetura Limpa: O Guia do Artesão",
    preco: 105.00,
    quantidade: 9,
    estoque: 15,
    categoria: "Livros"
  }
];

//Crie um array filtrado de cada uma das categorias de produtos. 
//Eletrônicos, Vestuário, Casa & Cozinha e Livros.

let produtosEletronicos = produtos.filter((prod) => prod.categoria === "Eletrônicos")
let produtosVestuario = produtos.filter((prod) => prod.categoria === "Vestuário")
let produtosCasaCozinha = produtos.filter((prod) => prod.categoria === "Casa & Cozinha")
let produtosLivros = produtos.filter((prod) => prod.categoria === "Livros")

//Para cada categoria faça o seguinte: retorne o valor total de estoque.
//Cada total de estoque de categoria será adicionado a um array, ao final também contabilize o total geral de todos os estoques. 
let valoresPorCategoria = []

valoresPorCategoria.push({
    categoria: 'eletronicos',
    valorTotalEstoque: produtosEletronicos.reduce((total, prod) => total + (prod.estoque * prod.preco),0)
})

valoresPorCategoria.push({
    categoria: 'vestuario',
    valorTotalEstoque: produtosVestuario.reduce((total, prod) => total + (prod.estoque * prod.preco), 0)
})

valoresPorCategoria.push({
    categoria: 'casaCozinha',
    valorTotalEstoque: produtosCasaCozinha.reduce((total, prod) => total + (prod.estoque * prod.preco), 0)
})

valoresPorCategoria.push({
    categoria: 'livros',
    valorTotalEstoque: produtosLivros.reduce((total, prod) => total + (prod.estoque * prod.preco), 0)
})

console.log(valoresPorCategoria)

let totalGeralEstoque = valoresPorCategoria.reduce((total, prod) => total + prod.valorTotalEstoque, 0)
console.log(totalGeralEstoque)