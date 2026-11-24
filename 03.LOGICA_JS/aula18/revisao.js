let numeros = [ 1, 2, 3, 4, 5]

//percorrer um array usando o laço for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

//métodos para manipulação de arrays (inclusão e exclusão)

//inserir no início do array 
numeros.unshift(0)
//remover um elemento do início do array
numeros.shift()


//inserir no fim do array
numeros.push(6)
//remover um elemento do fim do array
numeros.pop()


//arrays com mais de uma dimensão 
let alunos = [
    ['aluno1', [8, 5, 10]],
    ['aluno2', [10, 9, 8]],
    ['aluno3', [9, 6, 7]]
]

//acessar a primeira nota do segundo aluno
console.log(alunos[1][1][0])

//laços aninhados para percorrer arrays multidimensionais
//primeiro laço for itera sobre os alunos
//segundo laço for itera sobre as notas de cada aluno

for (let i = 0; i < alunos.length; i++) {
    console.log(`Exibindo as notas do aluno ${alunos[i][0]}`)
    
    for (let j = 0; j < alunos[i][1].length; j++) {
        //fixa no aluno determinado pelo laço mais externo
        console.log(alunos[i][1][j])
    }
}

/*let alunos = [
    ['aluno1', [8, 5, 10]],
    ['aluno2', [10, 9, 8]],
    ['aluno3', [9, 6, 7]]
]*/
console.log(alunos.includes('aluno1')) //false
console.log(alunos[0].includes('aluno1')) //true

console.log(alunos.indexOf('aluno1')) //-1
console.log(alunos[0].indexOf('aluno1')) //0