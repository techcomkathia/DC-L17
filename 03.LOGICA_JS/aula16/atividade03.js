/*A04-Q11
Intermediário
Leia N notas, calcule a média e conte quantas foram maiores ou iguais a 7.*/

let notas = 5
let somaNotas = 0
let media = 0
let contagem = 0

for(let i=1; i<=notas; i++){
    let nota = Number(prompt('Digite a nota ' + i))
    somaNotas += nota
    if(nota >= 7){
        contagem++
    }
}

media = somaNotas/notas
alert(`A media das ${notas} notas é ${media} e ${contagem} notas foram maiores ou iguais a 7`)