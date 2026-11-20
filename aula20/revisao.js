//funcoes sem parametros e sem retorno

let variavelGlobal = 'texto'

function saudacao(){
    let variavelLocal = 'texto'
    console.log('Sou a execuação de uma função sem retorno e sem parâtro')
    console.log(`o VALOR da variável global é ${variavelGlobal}`)
    console.log(`o VALOR da variável local é ${variavelLocal} e só posso ser acessada dentro da função em que eu fui definida`)
}

let retorno = saudacao() //undefined
// console.log(retorno)

function saudacao2(idade, nome='cleitinho'){
    console.log(`valor do primeiro parâmetro nome : ${nome} e do segundo parâmetro idade : ${idade}`)
    return 'Sou a execução de uma função com parametro e com retorno'
    let soma = 2+2
    console.log(soma)
    //todas as linhas escritras depois do retorno serão ignoradas pelo código
}


retorno =  saudacao2(20)
//console.log(retorno) 


function soma(a,b){
    return a + b
}


function outraFuncao(a,b,operacao){
    console.log(`O resultado da operação ${operacao} entre ${a} e ${b} é ${operacao(a,b)}`)
}

outraFuncao(2,3,soma)
outraFuncao(2,3,(a,b) => a*b)

