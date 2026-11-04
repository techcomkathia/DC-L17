// leia 3 notas e calcule a média individual para 5 alunos.
// Importante utilize 2 laços while aninhados. O externo controla os alunos e o interno controla as notas

/*2 variáveis : uma para o laço mais externo e outra para o interno
let aluno
let notaNumero 
//variavel para armazenar a soma das notas
let somaNotas = 0
*/
//a cada laço interno (leitura das notas, a variavel notaNumero vai ser atualizada em +1 ou  ++ até que seja igual a 3)

//a variável mais externa (aluno) vai ser atualizada em +1 ou ++ até que seja igual a 5
// importante: reset a variavel soma Notas depois de mostrar a média

let aluno = 1 //variar até 5
let notaNumero = 1 //variar até 3
//essas duas variáveis controlam os laços
let somaNotas = 0
// armazena a soma das notas de cada aluno

// controla a quantidade de alunos
while(aluno <= 5){
    alert(`Infome as notas do aluno nº ${aluno} `)
    // controla a quantidade de notas
    while( notaNumero <= 3){
        let nota = Number(prompt(`Digite a ${notaNumero} nota`))
        somaNotas += nota

        //atualizar a variavel notaNumero
        notaNumero++
    }
    //mostrar a média 
    let media = somaNotas / 3
    alert(`A media do aluno ${aluno} foi ${media}`)
    //resetar a variavel somaNotas
    somaNotas = 0
    //atualizar a variavel notaNumero
    notaNumero = 1

    //atualizar a variavel aluno
    aluno++
}