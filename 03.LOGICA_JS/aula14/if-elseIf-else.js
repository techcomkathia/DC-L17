//essa condicional é utilizada para situações onde existe mais de 2 possibilidades de execução

//turnos de um curso manha/tarde/noite

let turno = "madrugada"

/*if(condicao1){
    //codigo a ser executado se a condicao1 for verdadeira
}
else if (condicao2){
    //codigo a ser executado se a condicao2 for verdadeira
}
else if (condicao3){
    //codigo a ser executado se a condicao3 for verdadeira
}
[...]
else{
    // condição final, só será executado caso nenhuma das condições anteriores seja verdadeira
}*/


if(turno == "manha"){
    console.log("Bom dia")
}
else if(turno == "tarde"){
    console.log("Boa tarde")
}
else if(turno == "noite"){
    console.log("Boa noite")
}
else{
    console.log("Turno inválido")
}