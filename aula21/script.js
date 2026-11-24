// =========================================
// LISTA DE PRODUTOS (array de objetos)
// Cada objeto é um produto da loja.
// =========================================

//selecionar elementos
const tituloPagina = document.getElementsByClassName('cabecalho-titulo')[0]
const subTituloPagina = document.getElementsByClassName('cabecalho-subtitulo')[0]

//atividade 1
tituloPagina.innerHTML = 'Loja Live 17'
subTituloPagina.innerHTML = 'Resolução da atividade 1'


const produtos = [
  // ----- Produto 1 (exemplo completo) -----
  {
    nome: "Fone de Ouvido Bluetooth",
    categoria: "Eletrônicos",
    descricao: "Som de alta qualidade, bateria de 20 horas e cancelamento de ruído.",
    preco: 199.9,
    precoAntigo: 299.9,   // opcional: aparece riscado
    selo: "Novo",         // opcional: etiqueta no canto do card
    imagem: "https://picsum.photos/seed/fone/400/300"
  },

  // ----- Produto 2 (incompleto) -----
  // TAREFA 2: complete este produto com categoria, descricao e preco
  {
    nome: "Mochila Escolar",
    imagem: "https://picsum.photos/seed/mochila/400/300"
  },

  // ----- Produto 3 -----
  // TAREFA 3: crie um produto novo aqui embaixo (não esqueça da vírgula entre os objetos!)

];


// =========================================
// FUNÇÕES
// =========================================

// Transforma um número em preço: 199.9 -> "R$ 199,90"
function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

