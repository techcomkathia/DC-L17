//crie uma função chamada calculadora : a calculadora poderá receber qualquer função de operação matemática ou que envolva 2 parâmetros numéricos deverá mostrar no console o resultado da operação;
function calculadora(a,b, funcao) {
    console.log(funcao(a,b))
}

//execute a função calculadora passando 2 parâmetros numéricos e uma função que calcula a área de um triangulo (base * altura) / 2
calculadora(5, 3, (base, altura)=> base*altura/2)

//execute a função calculadora passando 2 parâmetros numéricos e uma função que calcula a tabuada desses dois números. Exemplo : 2 x 2 = 4, 2 x 3 = 6, etc. depois 3x1 = 3, etc.

calculadora(2, 3, (num1, num2)=>{
    console.log(`TABUADA DO NÚMERO ${num1}`)
    for(let i = 1; i <= 10; i++){
        console.log(`${num1} x ${i} = ${num1*i}`)
    }
    console.log(`TABUADA DO NÚMERO ${num2}`)
    for(let i = 1; i <= 10; i++){
        console.log(`${num2} x ${i} = ${num2*i}`)
    }

    return (`tabuadas nos números : ${num1} e ${num2}`)
})

