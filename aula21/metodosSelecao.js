let paragrafos = document.getElementsByTagName('p')
console.log(paragrafos)


paragrafos[1].style.backgroundColor= 'red'

let comClasse =  document.getElementsByClassName('minhaClasse')

console.log(comClasse)

let comId = document.getElementById('especial')
console.log(comId)

//com relação ao conteúdo de uma tag
//innerHTML : todo o html (tags e conteúdo, incluindo o que está oculto por css)
console.log(comId.innerHTML)

//innerText: apenas o texto (sem tags) e o que está visível (ignora o que está oculto por css)
console.log(comId.innerText)

//textContent: apenas o texto (sem tags) e o que está oculto pelo css
console.log(comId.textContent)

let imagem = document.getElementsByTagName('img')[0]
console.log(imagem.src)
imagem.src = 'https://placehold.co/600x400/orange/white'

let container = document.getElementById('container')

container.innerHTML = 
`
<h1>Sou um título de exemplo</h1>

<p> Fui escrito com js em uma div vazia </p>`