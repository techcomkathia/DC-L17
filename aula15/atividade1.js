// atividade montada na aula
//leia 5 notas de um aluno, armazenando-as em uma variável de soma e depois calcule a média. Importante: use o laço while para ler as notas 

//pedir uma nota 
//armazenar com as notas anteriores

//o processo vai ser repetido 5x

let notasLidas = 0
let somaNotas = 0
let totalNotas = 5

while (notasLidas < totalNotas){
   let nota = Number(prompt("Digite uma nota"))
   somaNotas += nota
   //atualização do quantitativo de notas lidas
   //ele irá variar de 0 a 4 = totalizando 5 notas lidas
   notasLidas++
}

let media = somaNotas / totalNotas
console.log(`A media das notas lidas foi ${media}`)