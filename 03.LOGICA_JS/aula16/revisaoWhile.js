// quantidade de repetições limitada pelo programador
//contagem de 0 a 10 (11 repetições do laço)
let numero = 0
while(numero <=10){
    //atividade repetitiva
    console.log(`numero ${numero}`)

    //incremento: atualização da condição de parada do laço
    numero++
}


//quantidade de repetições indefinida pelo programador
//perguntar se o usuario deseja continuar a operação 

let escolhaUsuario = true

while(escolhaUsuario){
    console.log('continuar a operação')
    escolhaUsuario = confirm('Deseja continuar?') //true ou false
}


//combinação do numero de vezes preestabelecido e uma decisião do usuario
let numeroVezes = 1
let senha = 123
let senhaUsuario = prompt('Digite a senha')
//enquanto a senha for diferente E a quantidade de vezes for menor que 3 ele continua o laço
while(senha != senhaUsuario && numeroVezes <= 3){
    console.log('senha incorreta')
    senhaUsuario = prompt('Digite a senha')
    numeroVezes++
}

//faça a contagem de numero até 10

do{
    let numero = Number('55') //simulando a entrada errada do usuário na primeira vez 
    console.log(numero)
    numero++
}while(numero <= 10)