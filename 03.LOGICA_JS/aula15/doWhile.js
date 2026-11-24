let numero = 1

//enquanto o numero for menor que 100 mostre ele no console

do {
    console.log(numero)
    // atualizar a variável que controla o laço
     numero++
} while (numero < 100)

/*
let qtdTentativas = 0
let senhaUsuario = Number(prompt("Digite a senha"))


while(senhaUsuario != senhaCorreta && qtdTentativas < 3){
    senhaUsuario = Number(prompt("A senha está incorreta. Digite a senha"))
    qtdTentativas++
}*/

let senhaCorreta = 1234
let senhaDigitada= ""
let qtdTentativas = 0

do{
    senhaDigitada = Number(prompt("Digite a senha"))
    qtdTentativas++}
while(senhaDigitada != senhaCorreta && qtdTentativas < 3)

