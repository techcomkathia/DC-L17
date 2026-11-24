// funções de seta ou arrow functions tem o objetivo de serem "definidas" no local de uso. Normalmente onde são usadas como callbacks por outras funções. Também podem ser armazenadas em uma variável ou atributo de objeto para serem usadas posteriormente.

let umaLinhaComRetorno = () => 100*2
//se a função tem apenas uma única linha tem retorno implícito. Não é necessário usar a palavra return

let unhaLinhaComParametro = ( palavra) => `A palavra ${palavra} tem ${palavra.length} letras`

let verificarQtdLetrasPar= (palavra) => {
    if(palavra.length % 2 === 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}
// se a função tiver mais de uma linha tem que usar a palavra return

function mostrarNoConsole(a,b, funcao){
    //recebe uma função e mostra o retorno dela no console
    console.log(funcao(a,b))
}

//definição da arrow function no local do uso (callback)
mostrarNoConsole(10, 20, (num1,num2)=> num1 + num2)

mostrarNoConsole(1, 100, (x, y)=>{
    let maior = 0
    if(x > y){
        maior = x
    }else{
        maior = y
    }
    return maior
})

