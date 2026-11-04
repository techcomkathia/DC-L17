let limite = 10
let numeroInicial = 0

let qtdPares = 0
let somaPares = 0

while(numeroInicial <= limite){

    if(numeroInicial % 2 ==0){
        console.log(numeroInicial)
        qtdPares++
        somaPares += numeroInicial
    }

    // atualizar a variável que controla o laço
     numeroInicial++

}