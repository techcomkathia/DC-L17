// podemos ter um laço que tem outro laço interno 
// while com um while interno

let numeroExterno = 1
let numeroInterno = 10

//montar uma tabuada 

while (numeroExterno <= 10){
    console.log(`Tabuada do ${numeroExterno}`)


    while (numeroInterno <= 100){
        
        console.log(`${numeroExterno} x ${numeroInterno} = ${numeroExterno * numeroInterno}`)
        // atualizar a variável que controla o laço interno
        numeroInterno+=10
    }
    // atualizar a variável que controla o laço externo
    numeroExterno++
    //resetar o laço interno
    numeroInterno = 10
}


