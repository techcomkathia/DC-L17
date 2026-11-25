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
  //faça a seleção dos elementos do document que já existem no HTML e altere o conteúdo das tags.
  //Arquivos atualizados, considere a versão que estiver no gitHub ( removida as funções de montagem da vitrine.)
  {
    nome: "Mochila Escolar",
    imagem: "https://picsum.photos/seed/mochila/400/300",
    categoria: "Papelaria", 
    descricao: "Mochila para escola com alta capacidade e espaço, material resistente.",
    precoAntigo: 250.00,
    preco: 190.00,
    selo: "Novo"
  },

  // ----- Produto 3 -----
  // TAREFA 3: crie um produto novo aqui embaixo (não esqueça da vírgula entre os objetos!)

    {
    nome: "Mochila Escolar Outra",
    imagem: "https://picsum.photos/seed/mochila/400/300",
    categoria: "Papelaria", 
    descricao: "Mochila para escola com alta capacidade e espaço, material resistente.",
    precoAntigo: 450.00,
    preco: 390.00,
    selo: "Novo"
  },

];

const imagemProd = document.getElementsByClassName('card-imagem')[1]
const categoriaProd = document.getElementsByClassName('card-categoria')[1]
const tituloProd =  document.getElementsByClassName('card-titulo')[1]
const descricaoProd = document.getElementsByClassName('card-descricao')[1]
const precoProd = document.getElementsByClassName('preco')[1]
const precoAntigoProd = document.getElementsByClassName('preco-antigo')[1]

imagemProd.src = produtos[1].imagem
imagemProd.alt = produtos[1].nome
categoriaProd.innerHTML= produtos[1].categoria
descricaoProd.innerHTML = produtos[1].descricao
tituloProd.innerHTML = produtos[1].nome
precoProd.innerHTML= formatarPreco(produtos[1].preco)
precoAntigoProd.innerHTML = formatarPreco(produtos[1].precoAntigo)
// =========================================
// FUNÇÕES
// =========================================

// Transforma um número em preço: 199.9 -> "R$ 199,90"
function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}


function inserirProduto(objProduto){
  //selecionar o objeto do document que será modificado
  const vitrine = document.getElementsByClassName('vitrine')[0]

  vitrine.innerHTML+=`
      <article class="card">
        <img class="card-imagem"
             src= ${objProduto.imagem}
             alt=${objProduto.nome}>

        <div class="card-conteudo">
          <h3 class="card-titulo">${objProduto.nome}</h3>

          <p class="card-categoria"> ${objProduto.categoria}</p>
          <h3 class="card-titulo"> ${objProduto.nome}</h3>
          <p class="card-descricao"> ${objProduto.descricao}</p>

          <div class="card-precos">
            <span class="preco-antigo"> ${objProduto.precoAntigo}</span>
            <span class="preco"> ${objProduto.preco}</span>
          </div>

          <button class="botao">Comprar</button>
        </div>
      </article>
  `
}


inserirProduto(produtos[2])