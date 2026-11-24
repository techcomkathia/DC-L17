let aluno = ['nome', [10,8,10]]
//acessar a primeira nota
console.log(aluno[1][0])

let aluno2 = ['nome2', [10,8,10]]

let turma = [
    ['nome', [10,8,10]],
    ['nome2', [10,8,10]]
]
//acessar a primeira nota do primeiro aluno
console.log(turma[0][1][0])


//você recebeu um array de notas, onde cada elemento do array é um array de 3 notas de um aluno.
//Você deverá calcular a média de cada aluno e adicionar em um array de médias

let medias = []
let notas = [
    [8,8,7],
    [10,8,6],
    [5,8,10],
    [7,8,10],
    [10,10,10]
]

for(let i=0; i<notas.length; i++){
    let media = (notas[i][0] + notas[i][1] + notas[i][2])/3
    medias.push(media)
}
console.log(medias)

//podemos organizar essas informações pela correpondência da posição dos elementos nos repetidos arrays
//notas, media, 'nome aluno'
let alunos = [
    'aluno1',
    'aluno2',
    'aluno3',
    'aluno4',
    'aluno5'
]

let informacoes = []

for(let i=0; i<alunos.length; i++){
    informacoes[i] = [alunos[i], notas[i], medias[i]]
}
console.log(informacoes)