// crie 4 funções para as operações básicas: somar, multiplicar, subtrair e dividir. 
// Cada uma dessas funções deverá receber 2 parâmetros numericos e retornar o resultado da operação. Importante, não é possível divisão por 0. Verifique essa condição

//Faça uma quinta função camada calcular: ela deverá receber 3 parâmetros: dois números e um símbolo. De acordo com o símbolo execute a função correta e mostre o retorno no console. Os símbolos podem ser: +, -, *, /. Para qualquer outro símbolo, mostre no console: "Operação não suportada."

/*
Condicionais : if/else ou operador ternário e switch case
Funções com parâmetros e retorno*/


function somar(n1,n2=0){
    //valor padrão é informado pelo desenvolvedor e caso seja infromado um valor na invocação da fução para o segundo parâmetro (ou qualquer parâmetro com valor padrão) ele será sobreescrito.
    return n1 + n2
}

function subtrair(n1,n2){
    return n1 - n2
}

function multiplicar(n1,n2){
    return n1 * n2
}

function dividir(n1,n2){
    return (n2==0 ? 'Divisão por zero é impossível' : n1 / n2)
}

function calcular(n1,n2,simbolo){
    switch(simbolo){
        case '+':
            return somar(n1,n2)
        case '-':
            return subtrair(n1,n2)
        case '*':
            return multiplicar(n1,n2)
        case '/':
            return dividir(n1,n2)
        default:
            return 'Operação não suportada'
    }
}

function calcularComCallback(n1, n2, funcao){
    return funcao(n1,n2)
}

console.log(calcularComCallback(10,20,somar))
console.log(calcularComCallback(10,20,subtrair))
console.log(calcularComCallback(10,20,multiplicar))
console.log(calcularComCallback(10,20,dividir))
console.log(calcularComCallback(10,0,dividir))