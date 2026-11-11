let frutas = ['maca', 'laranja', 'banana', 'uva']


for(let i=0; i<frutas.length; i++){
    console.log(frutas[i])
}

let palavra = 'cleitinho'
console.log(palavra.length)
let palavraInvertida = ''

for(let i=palavra.length-1; i>=0; i--){
    console.log(palavra[i])
    palavraInvertida += palavra[i]
}

console.log(palavraInvertida)
console.log(palavra)