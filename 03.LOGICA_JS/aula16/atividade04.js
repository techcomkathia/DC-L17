//Uma empresa tem alguns setores (com N funcionários) focados em consultoria diversas. 
//Recorrentemente, um setor precisa de um representante que possa dirigir o carro da empresa para prestar a consultoria presencialmente.
//Crie um programa que aceite o nome de um setor e a quantidade de funcionários deste setor. Em seguida, imprima na tela os nomes dos funcionários que podem dirigir o carro e quantos funcionários podem dirigir o carro.

// Deverá ser informado pelo usuário: 
//  nome
//  idade 
//  se possui ou nao carteira de motorista tipo B

let setor = prompt('Digite o nome do setor')
let qtdFunc = parseInt(prompt('Digite a quantidade de funcionários do setor'))
let funcHabilitados = 0


for(let i=1; i<=qtdFunc; i++){
    let nome = prompt('Digite o nome do funcionário '+ i)
    let idade = parseInt(prompt('Digite a idade do funcionário '+ i))
    let possuiCarteira = confirm('Possui carteira de motorista tipo B?')

    if(idade >= 18 && possuiCarteira){
        funcHabilitados++
        console.log(`O funcionário ${nome} pode dirigir o carro`)
    }

}

console.log(`O setor ${setor} tem ${qtdFunc} funcionários e ${funcHabilitados} habilitados para realizar a consultoria presencial`)