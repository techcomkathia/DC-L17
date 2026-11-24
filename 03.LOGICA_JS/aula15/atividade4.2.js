//variação dessa questão 4 onde a quantidade de vezes que a senha é digitada é limitada.

//vamos utilizar o && para avaliar duas condições : senhaDigitada != senhaCorreta && qtdTentativas < 3

let qtdTentativas = 0
let senhaUsuario = Number(prompt("Digite a senha"))


while(senhaUsuario != senhaCorreta && qtdTentativas < 3){
    senhaUsuario = Number(prompt("A senha está incorreta. Digite a senha"))
    qtdTentativas++
}