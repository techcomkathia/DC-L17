let nome = 'Teclado'
let preco = 99.90
let quantidade = 100
let estoque = 'true'
let imagem = 'url da imagem'
let cor = 'preto e cinza'

// visualizar as variáveis todas em uma "unica linha"
console.log( nome, preco, quantidade, estoque, imagem, cor)

// visualizar as variáveis separadamente e o seu tipo de dado
console.log( nome)
console.log( typeof nome)
console.log( preco)
console.log( typeof preco)
console.log( quantidade)
console.log( typeof quantidade)
console.log( estoque)
console.log( typeof estoque)
console.log( imagem)
console.log( typeof imagem)
console.log( cor)
console.log( typeof cor)

//  concatenação de texto : pode utilizar valores de variáveis mais texto definido pelo desenvolvedor para criar um novo texto ou uma exibição melhor da informação

console.log( 'O produto ' + nome + ' custa '  + preco + ' reais e tem ' + quantidade + 'unidades em estoque')

// pode-se usar o tamplate string / literal para a mesma concatenação de texto
console.log( `O produto ${nome} custa ${preco} reais e tem ${quantidade - 50} unidades em estoque`)
console.log(quantidade)