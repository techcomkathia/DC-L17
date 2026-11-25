# Desafio – Criação dinâmica de conteúdo

## Objetivo

Transformar o **cardápio da RS-Burger** (atividade anterior) em uma página montada com **JavaScript**: os produtos deixam de ficar escritos no HTML e passam a ser gerados a partir de **arrays de objetos**.

## Material de base

Use o **HTML** e o **CSS** da atividade do cardápio. O CSS já está pronto e **não precisa ser alterado**.

Estrutura do HTML de referência:

```
body
├── header            → logo + menu (links para #burguer, #acompanhamentos, #bebidas)
├── h1                → "CARDÁPIO DIGITAL"
├── h2#burguer        → HAMBURGUERES       (3 produtos)
├── h2#acompanhamentos→ ACOMPANHAMENTOS    (1 produto)
└── h2#bebidas        → BEBIDAS            (2 produtos)
```

Cada produto é um card com esta estrutura:

```html
<div class="boxProduto">
    <div class="boxImg">
        <img src="imagens/burger01.png">
    </div>
    <div class="boxTexto">
        <h3>Clássico Angus Burger - R$22,50</h3>
        <p>Descrição do produto...</p>
        <button class="btn">Pedir</button>
    </div>
</div>
```

---

## Passo a passo

### 1. Transforme o conteúdo em dados

Com o auxílio de um agente de IA, transforme os produtos do HTML em **3 arrays de objetos**, um para cada categoria:

- `hamburgueres`
- `acompanhamentos`
- `bebidas`

Exemplo de objeto:

```js
{
  nome: "Clássico Angus Burger",
  preco: 22.5,
  descricao: "Delicie-se com o nosso Hambúrguer Clássico...",
  imagem: "imagens/burger01.png"
}
```

> Confira o resultado gerado pela IA: todos os produtos estão lá? Os preços estão como **número**?

### 2. Prepare o HTML

Agora o HTML não tem mais os cards de produto. Ficam só o `header`, o `h1`, os títulos `h2` e uma **`div` vazia** depois de cada título. É nessas `div`s que o JavaScript vai colocar os cards.

Use este HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">

    <title>RS-Burger</title>
</head>

<body>

    <header>
        <img class="logo" src="imagens/logo.png" alt="Logo">
        <nav>
            <ul>
                <li><a href="#burguer">Hamburgueres</a></li>
                <li><a href="#acompanhamentos">Acompanhamentos</a></li>
                <li><a href="#bebidas">Bebidas</a></li>
            </ul>
        </nav>
    </header>

    <h1>CARDÁPIO DIGITAL</h1>

    <h2 id="burguer">HAMBURGUERES</h2>
    <!-- os cards de hambúrguer serão inseridos aqui pelo JavaScript -->
    <div id="listaHamburgueres"></div>

    <h2 id="acompanhamentos">ACOMPANHAMENTOS</h2>
    <!-- os cards de acompanhamento serão inseridos aqui pelo JavaScript -->
    <div id="listaAcompanhamentos"></div>

    <h2 id="bebidas">BEBIDAS</h2>
    <!-- os cards de bebida serão inseridos aqui pelo JavaScript -->
    <div id="listaBebidas"></div>

    <!-- o script fica no final do body, depois dos elementos que ele vai selecionar -->
    <script src="script.js"></script>
</body>

</html>
```

No `script.js`, faça a **seleção** das três `div`s pelo `id` (por exemplo, com `document.getElementById`).

> Dica: no HTML original havia um `<br>` entre os cards. No seu card gerado pelo JavaScript, coloque o `<br>` depois do `.boxProduto` para manter o mesmo espaçamento.

### 3. Crie as funções

**Regra importante:** cada função tem **apenas um objetivo**. Por exemplo:

| Função (sugestão de nome) | Objetivo |
| --- | --- |
| `criarCard(produto)` | Recebe **um** objeto e retorna o HTML de **um** card |
| `montarSecao(listaProdutos, elementoSecao)` | Percorre um array e coloca todos os cards na `div` da seção |
| `montarCardapio()` | Chama `montarSecao` para as 3 categorias |

- Os arrays de produtos devem ser **passados como parâmetro** para as funções.
- Nesse primeiro momento, use **`innerHTML`** ou **`innerText`** para inserir o conteúdo.

### 4. Adicione novos produtos

Adicione **mais produtos** ao cardápio, seguindo o mesmo formato dos objetos que já existem. Eles devem aparecer na tela **sem alterar diretamente o arquivo HTML**.

---

## Checklist

- [ ] Existem 3 arrays de objetos, um para cada categoria.
- [ ] Nenhum card de produto está escrito direto no HTML.
- [ ] As `div`s `#listaHamburgueres`, `#listaAcompanhamentos` e `#listaBebidas` foram selecionadas no JavaScript.
- [ ] Cada função tem um único objetivo.
- [ ] Os arrays são passados como parâmetro para as funções.
- [ ] O conteúdo é inserido com `innerHTML` .
- [ ] A página fica visualmente igual ao cardápio original.
- [ ] Os links do menu continuam levando para cada seção.
- [ ] Novos produtos adicionados aos arrays aparecem na tela automaticamente.
