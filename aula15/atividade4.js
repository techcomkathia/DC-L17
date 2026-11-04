/*A03-Q05
Fácil
Peça uma senha e repita a pergunta enquanto ela for diferente de 1234.*/

let senhaCorreta = 1234
let senhaDigitada = Number(prompt("Digite a senha"))

while(senhaDigitada != senhaCorreta){
    senhaDigitada = Number(prompt("A senha está incorreta. Digite a senha"))
}

