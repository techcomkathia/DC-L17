// atividade de aula
//mostre no console todos os números divisíveis por 2 e por 5 de 0 até o número digitado pelo usuário

//laço repetição for
//condicional if com duas condições sendo testadas ao mesmo tempo

let numero = Number(prompt('Digite um número'))
//validar se foi digitado um número (opcional)
while(isNaN(numero)){
    numero = Number(prompt('Digite um número'))
}

/*
ou a segunda opção
do{
    numero = Number(prompt('Digite um número'))
} while(isNaN(numero))  */

for(let i=0; i<=numero; i++){
    //teste para saber se o número atende as duas condições
    if(i % 2 == 0 && i % 5 == 0){
        console.log(i)
    }
}
