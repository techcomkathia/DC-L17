//metodos com os seletores do css
//retorna um nodeList com TODOS os elementos de um seletor específico
let titulos = document.querySelectorAll('h1')
// seletor de classe .minhaClasse
// seletor de ID #meuId

//retorna apenas a primeira ocorrência do seletor. Muito indicado para seleções com id
let unico = document.querySelector('#tituloRodape')

console.log(titulos)

titulos[0].innerHTML = 'Conteúdo'
//titulos[0].style.color= 'red'
unico.innerHTML = 'Conteúdo inserido pelo js'

console.log(titulos[0].classList)

//adicionar uma nova classe
titulos[0].classList = 'novaClasse'
console.log(titulos[0].classList)
// usar sempre o método add 
titulos[0].classList.add('vermelho')
console.log(titulos[0].classList)
titulos[0].classList.remove('vermelho')

//ATIVIDADE 1


//no css do arquivo do desafio crie a classe oculta ( com o display none)
//selecione o elemento do cardápio que mostra os acompanhamentos e oculte ele da visualização bem como o link que é mostrado no menu de navegação. Dica: crie uma função chamada ocultar, que receba como parâmetro os seletores do link do menu e da seção do cardápio. 