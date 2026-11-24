// atua a partir de uma expressão procurando a sua exata ocorrencia

let escolha = "a"
// a chave / key ou nesse caso variável escolha é um valor que não é um booleano. Os casos/ opções (case) são a exata ocorrência do valor da variável passada para a chave
switch (escolha) {
    case "A":
        console.log("A escolha foi A")        
        break;

    case "B":
        console.log("A escolha foi a B")
        break;

    case "C":
        console.log("A escolha foi a C")
        break;

    default:
        console.log("Nenhuma das opções válidas foi escolhida e o default foi executado como tratamento de erro")
        break;
}