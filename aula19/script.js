// definição

//minhaFuncao()

function minhaFuncao(){
    console.log('Executando a função minha função')
}

//variável no escopo global
//pode ser acessada em qualquer lugar desse script
let soma = 4+2

//console.log(soma)

//console.log('Sou uma parte do script')

/*minhaFuncao()*/

function somar(){
    // variáveis locais
    //só podem ser acessadas dentro dessa função
    let numero1 = 10
    let numero2 = 20
    let total = numero1 + numero2
    console.log(total)
    //acessamos uma variável global 
    soma += 100
}

//console.log(numero1)

//executo a função somar
/*somar()
somar()*/

function subtrair(num1, num2){
    console.log(num1, num2)
    console.log(num1 - num2)
}

subtrair()
//subtrair é uma função que espera 2 parâmetros
subtrair(5, 10)
subtrair(10, 5)
subtrair(10) //parametros a menos
subtrair(10, 5, 15) //parametros a mais: parâmetros extras serão ignorados


//receba 2 pârametros na função mostrar pares: o número inicial do intervalo e o final. Mostre todos os pares, a soma dos pares e uma soma dos ímpares no terminal

function multiplicar(num1,num2){
    let resultado = num1 * num2
    return resultado

    console.log('Não serei executada, pois estou após o retorno')
}

let resMult = multiplicar(5,5)
console.log(resMult)

function calcularDesconto(preco,desconto){
    let fatorDesconto = 1 - desconto
    let resultado =  multiplicar(preco,fatorDesconto)
    console.log( `O valor final com o desconto foi de R$ ${resultado}`)
    return resultado
}


let precoFinal = calcularDesconto(100,0.1)
console.log(precoFinal)