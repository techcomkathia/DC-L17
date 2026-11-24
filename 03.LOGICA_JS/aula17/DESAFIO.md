# Desafio: Relatório de vendas do Magazine Cleitinho 🛍️

## Situação-problema

O Magazine Cleitinho realizou uma grande promoção no último 10/10. Ao final do dia, o proprietário percebeu que tinha uma lista com todos os produtos vendidos, mas não sabia quantas unidades de cada produto haviam sido comercializadas.

Sua missão é ajudar o Cleitinho a organizar essas informações!

### Lista de produtos vendidos

```javascript
let produtosDoCleitinho = [
  'camisa',
  'calção',
  'camisa',
  'tênis',
  'meia',
  'camisa',
  'bermuda',
  'tênis',
  'camisa',
  'boné',
  'meia',
  'camisa',
  'chinelo',
  'camisa',
  'calção',
  'tênis',
  'camisa',
  'camisa',
  'mochila',
  'meia'
];
```

## Sua missão

Desenvolva um algoritmo em JavaScript que percorra a lista de produtos vendidos e monte um relatório contendo o nome de cada produto e a quantidade de vezes que ele aparece na lista.

Para isso, siga as etapas:

1. Crie dois arrays vazios:
   - `nomesProdutos`: armazenará os nomes dos produtos, sem repetições.
   - `quantidades`: armazenará a quantidade de vezes que cada produto foi vendido.

2. Percorra a lista original de produtos utilizando uma estrutura de repetição.

3. Para cada produto encontrado, verifique se ele já está cadastrado no array `nomesProdutos`, utilizando o método `indexOf()`.

4. Se o produto ainda não estiver cadastrado:
   - Adicione seu nome ao array `nomesProdutos`.
   - Adicione o número `1` ao array `quantidades`, indicando sua primeira venda.

5. Se o produto já estiver cadastrado:
   - Utilize a posição encontrada pelo `indexOf()` para aumentar em 1 sua quantidade no array `quantidades`.

6. Ao finalizar, percorra os arrays e apresente um relatório mostrando o nome de cada produto e sua respectiva quantidade de vendas.

## Exemplo de como os arrays devem ficar

```javascript
let nomesProdutos = [
  'camisa',
  'calção',
  'tênis',
  'meia'
];

let quantidades = [
  8,
  2,
  3,
  3
];
```

Observe que os dois arrays trabalham juntos: o produto que está na posição 0 de `nomesProdutos` tem sua quantidade registrada na posição 0 de `quantidades`.

## Resultado esperado

```text
RELATÓRIO DE VENDAS

camisa: 8 vendas
calção: 2 vendas
tênis: 3 vendas
meia: 3 vendas
bermuda: 1 venda
boné: 1 venda
chinelo: 1 venda
mochila: 1 venda
```

## Regras

- Utilize estruturas de repetição (`for`) e condicionais (`if/else`).
- Utilize os métodos de array estudados: `indexOf()` e `push()`.
- Não utilize objetos, `Map`, `Set` ou bibliotecas externas.
- Não crie um array para cada produto. Utilize apenas os dois arrays indicados.
- Mantenha a correspondência entre as posições dos dois arrays.
- Ao final poderá montar um array de 2 dimensões com a correspondência entre o nome do item e a quantidade do item. 