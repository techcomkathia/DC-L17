//receba 2 pârametros na função mostrar pares: o número inicial do intervalo e o final. Mostre todos os pares, a soma dos pares e uma soma dos ímpares no terminal

function mostrarPares(numInicial, numFinal){
    let somaPares = 0
    let somaImpares = 0

    //verificar se o numFinal é maior ou igual que o numInicial
    if(numFinal <= numInicial){
        console.log('O segundo parâmetro deve ser maior que o primeiro')
        //duas possibilidades : fazer a troca e informar ao usuário OU interromper a execução
    }

    for(let i = numInicial; i <= numFinal; i++){
        if(i % 2 == 0){
            console.log(i)
            somaPares += i
        }else{
           somaImpares += i
        }
    }
    console.log(`Soma dos pares: ${somaPares}`)
    console.log(`Soma dos ímpares: ${somaImpares}`)
}


mostrarPares(0, 100)
mostrarPares(50,100)
mostrarPares(100,50)