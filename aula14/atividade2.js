/* leia o nome de um(a) aluno(a), 3 notas e calcule a média aritmética. Caso a média for maior ou igual a 7, exiba "O aluno(a) <nome> foi Aprovado(a)", caso contrário, exiba "Aluno(a) <nome> Reprovado(a)"*/

let nome = prompt("Digite o nome do aluno")
let nota1 = Number(prompt("Digite a primeira nota"))
let nota2 = Number(prompt("Digite a segunda nota"))
let nota3 = Number(prompt("Digite a terceira nota"))

let media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    alert("O aluno(a) " + nome + " foi Aprovado(a) com a media " + media.toFixed(2))
    // o método toFixed() serve para limitar a quantidade de casas decimais representadas
} else {
    alert(`Aluno(a) ${nome} Reprovado(a) com a media ${media.toFixed(2)}`) // template string é escrito com acento grave e nao com aspas. Importante usar o $ e as chaves para inserir variaveis e conseguir representar o valor delas e não o nome.
}
