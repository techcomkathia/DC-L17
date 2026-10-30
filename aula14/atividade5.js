// Leia o preço de um produto e a cor da sua etiqueta. 
// De acordo com a cor da etiqueta aplique um desconto sobre o produto. 
// Verde - 10%  
// Amarelo - 20%  
// Azul - 30 % 
// Vermelho 40%
// Qualquer outra cor de etiqueta que não seja vermelho, amarelo, azul ou verde não terá desconto.

// Utilize a estrutura switch para resolver o problema.

let precoProduto = Number(prompt("Digite o preco do produto"))

//VERDE != verde
//Verde != verde
//VeRdE != verde
//o JS é case sensitive (que diferencia maiúsculas de minúsculas)

let corEtiqueta = prompt("Digite a cor da etiqueta")
//para garantir que a cor da etiqueta seja sempre minuscula e esteja coerente com o que está nos casos (case) vamos usar a conversão para letras minusculas

corEtiqueta = corEtiqueta.toLowerCase()
//O MÉTODO toLowerCase() converte uma string para letras minúsculas.
// O MÉTODO toUpperCase() converte uma string para letras maiúsculas.

let desconto = null


switch (corEtiqueta) {
    case "verde":
        desconto = 0.1
        break;
    case "amarelo":
        desconto = 0.2
        break;
    case "azul":
        desconto = 0.3
        break;
    case "vermelho":
        desconto = 0.4
        break;
    default:
        desconto = 0
        break;
}

let precoComDesconto = precoProduto * (1 - desconto)
alert(`O preco do produto com desconto de ${desconto * 100}% eh ${precoComDesconto}`)