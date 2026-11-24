// =========================================
// LISTA DE PRODUTOS (array de objetos)
// Cada objeto é um produto da loja.
// =========================================

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

// Recebe UM produto e devolve o HTML do card (em texto)
function criarCard(produto) {
  // Selo: só aparece se o produto tiver a propriedade "selo"
  let htmlSelo = "";
  if (produto.selo) {
    htmlSelo = `<span class="selo">${produto.selo}</span>`;
  }

  // Preço antigo: só aparece se o produto tiver "precoAntigo"
  let htmlPrecoAntigo = "";
  if (produto.precoAntigo) {
    htmlPrecoAntigo = `<span class="preco-antigo">${formatarPreco(produto.precoAntigo)}</span>`;
  }

  // Preço atual: se não tiver preço, mostra um aviso
  let htmlPreco = "Sem preço";
  if (produto.preco) {
    htmlPreco = formatarPreco(produto.preco);
  }

  // Monta o card usando template string (crase ` `)
  return `
    <article class="card">
      ${htmlSelo}
      <img class="card-imagem" src="${produto.imagem}" alt="${produto.nome}">
      <div class="card-conteudo">
        <p class="card-categoria">${produto.categoria}</p>
        <h3 class="card-titulo">${produto.nome}</h3>
        <p class="card-descricao">${produto.descricao}</p>
        <div class="card-precos">
          ${htmlPrecoAntigo}
          <span class="preco">${htmlPreco}</span>
        </div>
        <button class="botao">Comprar</button>
      </div>
    </article>
  `;
}


// =========================================
// MOSTRANDO OS PRODUTOS NA TELA
// =========================================

// Pega a <section class="vitrine"> do HTML
const vitrine = document.querySelector(".vitrine");

// Para cada produto do array, cria um card e coloca dentro da vitrine
produtos.forEach(function (produto) {
  vitrine.innerHTML += criarCard(produto);
});
