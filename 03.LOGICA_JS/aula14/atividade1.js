/* Verificando numero se é par ou ímpar:
Usando a função prompt, peça ao usuário um número (apenas dígitos numéricos) e com o altert ou o console.log exiba se ele é par ou ímpar.



*/


console.log(isNaN(NaN))
// opção 1 (sem converter)
let numeroUsuario = prompt("Digite um numero")
if (numeroUsuario % 2 == 0){
    alert("O numero digitado é par")
}
else{
    alert("O numero digitado é impar")
}

// opção 2 (convertendo para número) COM a validação se é um NaN

let numero = prompt("Digite um numero")
numero = parseInt(numero)

//a validação de paridade só será realizada se o número digitado Não for um NaN

if(isNaN(numero)){
    // se for um NaN informar ao usuário que não é aceito palavras 
    alert("Digite apenas numeros")
}else{
    //é executado caso a condição não seja verdadeira
    //se não for um NaN podemos verificar se é par ou ímpar

    if (numero % 2 === 0){
    console.log("O numero digitado é par")
    }
    else{
        console.log("O numero digitado é impar")
    }
}