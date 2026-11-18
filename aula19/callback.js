function dia(){
    return 'Bom dia!'
}

function noite(){
    return 'Boa noite!'
}

function tarde (){
    return 'Boa tarde!'
}

function falarDia(nome){
    console.log(`${nome}! ${dia()}`) //Fulano! Bom dia!
}

function falar(nome, funcao){
    console.log(`${nome}! ${funcao()}`)
}

falarDia('Fulano')
falar('Fulano', dia)
falar('Fulano', tarde)
falar('Fulano', noite)
