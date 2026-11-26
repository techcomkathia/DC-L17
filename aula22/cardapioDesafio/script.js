// =========================================================
// RS-BURGER – CARDÁPIO DIGITAL
// Os cards de produto não estão mais escritos no HTML:
// eles são montados aqui pelo JavaScript usando innerHTML.
// =========================================================


// =========================================================
// 1. DADOS (um array de objetos para cada categoria)
// =========================================================

const hamburgueres = [
  {
    nome: "Clássico Angus Burger",
    preco: 22.5,
    descricao: "Delicie-se com o nosso Hambúrguer Clássico, feito com um suculento hambúrguer de carne angus, queijo derretido, alface crocante, tomate fresco e um toque especial do nosso molho secreto. Perfeito para saciar sua fome!",
    imagem: "https://placehold.co/400x300/orange/white?text=Angus+Burger"
  },
  {
    nome: "Gourmet Burger",
    preco: 35,
    descricao: "O nosso Hambúrguer Gourmet, preparado com um suculento hambúrguer de carne nobre, queijo derretido, cebola caramelizada e baccon. Uma escolha irresistível!",
    imagem: "https://placehold.co/400x300/orange/white?text=Gourmet+Burger"
  },
  {
    nome: "Defumado BBQ Burger",
    preco: 29,
    descricao: "Deixe-se envolver pelo sabor defumado do nosso Hambúrguer BBQ, uma deliciosa combinação de hambúrguer de carne suculenta, queijo cheddar derretido, cebola caramelizada e salada verde.",
    imagem: "https://placehold.co/400x300/orange/white?text=BBQ+Burger"
  },
  // ----- novos produtos -----
  {
    nome: "Chicken Crispy Burger",
    preco: 26.9,
    descricao: "Filé de frango empanado e crocante, alface americana, tomate fresco e maionese de ervas. Leve, crocante e cheio de sabor!",
    imagem: "https://placehold.co/400x300/orange/white?text=Chicken+Crispy"
  },
  {
    nome: "Veggie Burger",
    preco: 27.5,
    descricao: "Hambúrguer de grão-de-bico temperado, queijo prato, rúcula, tomate e molho de iogurte com limão. Uma opção vegetariana deliciosa!",
    imagem: "https://placehold.co/400x300/orange/white?text=Veggie+Burger"
  },
  {
    nome: "Duplo Cheddar Burger",
    preco: 38.9,
    descricao: "Dois hambúrgueres de 150g, muito cheddar cremoso, bacon crocante e cebola roxa. Para quem tem muita fome!",
    imagem: "https://placehold.co/400x300/orange/white?text=Duplo+Cheddar"
  }
];

const acompanhamentos = [
  {
    nome: "Fritas",
    preco: 15,
    descricao: "Nossas batatas fritas são o acompanhamento perfeito para qualquer refeição! Cortadas em palitos e fritas até ficarem douradas e crocantes por fora, e macias por dentro, elas são irresistíveis em cada mordida.",
    imagem: "https://placehold.co/400x300/goldenrod/white?text=Fritas"
  },
  // ----- novos produtos -----
  {
    nome: "Onion Rings",
    preco: 18,
    descricao: "Anéis de cebola empanados e fritos na hora, sequinhos e crocantes, acompanhados do nosso molho barbecue.",
    imagem: "https://placehold.co/400x300/goldenrod/white?text=Onion+Rings"
  },
  {
    nome: "Nuggets (10 unidades)",
    preco: 19.9,
    descricao: "Pedaços de frango empanados e dourados, crocantes por fora e macios por dentro, servidos com molho de mostarda e mel.",
    imagem: "https://placehold.co/400x300/goldenrod/white?text=Nuggets"
  },
  {
    nome: "Batata Cheddar e Bacon",
    preco: 24.9,
    descricao: "Porção de batatas rústicas cobertas com cheddar cremoso e pedacinhos de bacon crocante. Ótima para dividir!",
    imagem: "https://placehold.co/400x300/goldenrod/white?text=Cheddar+e+Bacon"
  }
];

const bebidas = [
  {
    nome: "Coca-Cola",
    preco: 5,
    descricao: "Refresque-se com a clássica Coca-Cola gelada, uma bebida que encanta paladares há décadas. Com seu sabor único e inconfundível para acompanhar seu hambúrguer ou batatas fritas.",
    imagem: "https://placehold.co/400x300/darkred/white?text=Coca-Cola"
  },
  {
    nome: "Sprite",
    preco: 5,
    descricao: "Revitalize seus sentidos com a refrescante Sprite, uma bebida cítrica e efervescente que desperta os sentidos e eleva o seu ânimo para acompanhar seu hambúrguer ou batatas fritas.",
    imagem: "https://placehold.co/400x300/green/white?text=Sprite"
  },
  // ----- novos produtos -----
  {
    nome: "Suco Natural de Laranja",
    preco: 9,
    descricao: "Suco de laranja espremido na hora, sem conservantes e sem adição de açúcar. Natural e refrescante, servido em copo de 400ml.",
    imagem: "https://placehold.co/400x300/darkorange/white?text=Suco+de+Laranja"
  },
  {
    nome: "Milkshake de Chocolate",
    preco: 16.9,
    descricao: "Sorvete de chocolate batido com leite, finalizado com chantilly e calda de chocolate. A sobremesa perfeita em 500ml.",
    imagem: "https://placehold.co/400x300/saddlebrown/white?text=Milkshake"
  },
  {
    nome: "Água Mineral",
    preco: 4,
    descricao: "Água mineral sem gás, bem gelada, em garrafa de 500ml. Para matar a sede de forma leve.",
    imagem: "https://placehold.co/400x300/steelblue/white?text=Agua+Mineral"
  }
];


// =========================================================
// 2. SELEÇÃO DAS DIVS ONDE OS CARDS SERÃO COLOCADOS
// =========================================================

const listaHamburgueres = document.getElementById("listaHamburgueres");
const listaAcompanhamentos = document.getElementById("listaAcompanhamentos");
const listaBebidas = document.getElementById("listaBebidas");
const linksMenu = document.querySelectorAll('a')


function ocultarSecao(link, secao){
  link.classList.add('oculta')
  secao.classList.add('oculta')
}

function revelarSecao(link, secao){
  link.classList.remove('oculta')
  secao.classList.remove('oculta')
}

// =========================================================
// 3. FUNÇÕES (cada uma com um único objetivo)
// =========================================================

// Transforma um número em preço: 22.5 -> "R$22,50"
function formatarPreco(valor) {
  return "R$" + valor.toFixed(2).replace(".", ",");
}

// Recebe UM produto e retorna o HTML de UM card
// (mesma estrutura do card que antes estava escrito no HTML)
function criarCard(produto) {
  return `
    <div class="boxProduto">
        <div class="boxImg">
            <img class="rounded-4" src="${produto.imagem}" alt="${produto.nome}">
        </div>
        <div class="boxTexto">
            <h3>${produto.nome} - ${formatarPreco(produto.preco)}</h3>
            <p>${produto.descricao}</p>
            <button class="btn">Pedir</button>
        </div>
    </div>
    <br>
  `;
}

// Percorre um array de produtos e coloca todos os cards na div da seção
function montarSecao(listaProdutos, elementoSecao) {
    //limpa qualquer conteúdo anterior para só depois preencher com as informações dos produtos
  elementoSecao.innerHTML = "";

  // for (let i = 0; i < listaProdutos.length; i++) {
  //   elementoSecao.innerHTML += criarCard(listaProdutos[i]);
  // }

  listaProdutos.forEach((item)=> elementoSecao.innerHTML+= criarCard(item))
}

// Monta as 3 seções do cardápio
function montarCardapio() {
  montarSecao(hamburgueres, listaHamburgueres);
  montarSecao(acompanhamentos, listaAcompanhamentos);
  montarSecao(bebidas, listaBebidas);
}


// Mede a altura real do cabeçalho fixo e guarda na variável --alturaCabecalho do CSS.
// Assim, ao clicar no menu, o título da seção não fica escondido atrás do cabeçalho.
function ajustarAlturaCabecalho() {
  const cabecalho = document.getElementsByTagName("header")[0];
  document.documentElement.style.setProperty("--alturaCabecalho", cabecalho.offsetHeight + "px");
}


// =========================================================
// 4. INÍCIO – monta o cardápio quando a página abre
// =========================================================

montarCardapio();
ajustarAlturaCabecalho();
ocultarSecao(linksMenu[1],listaAcompanhamentos)

revelarSecao(linksMenu[1],listaAcompanhamentos)

// mede de novo quando as imagens (como o logo) terminam de carregar
window.onload = ajustarAlturaCabecalho;
// e quando o tamanho da janela muda (o menu pode quebrar em duas linhas)
window.onresize = ajustarAlturaCabecalho;
