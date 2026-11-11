//Você vai fazer um algoritmo que gerencia tarefas. 
//Existem 12 tarefas que precisam ser feitas e você deverá organizar elas em 2 grupos: tarefas urgentes e tarefas normais.
//No grupo de tarefas urgentes a lógica será pilha (última a entrar, primeira a sair)
//No grupo de tarefas normais a lógica será fila (primeira a entrar, primeira a sair).

//No dia de hoje só poderão ser realizadas 8 tarefas.
let tarefasNormais = []
let tarefasUrgentes = []

//Primeira parte: peça ao usuário 12 atividades. Pergunte o nome da atividade e se ela é urgente. Adicione ao array correto. 

for(let i=1; i<=12; i++){
    let nomeAtividade = prompt('Digite o nome da atividade')
    let urgente = confirm(`A atividade ${nomeAtividade} é urgente?`)
    if(urgente){
        tarefasUrgentes.push(nomeAtividade) //pilha
    } else {
        tarefasNormais.push(nomeAtividade) //fila
    }
}


//Ao finalizar a leitura das atividades, mostre as duas listas. 
console.log(tarefasNormais)
console.log(tarefasUrgentes)

let limiteAtividades = 8
let realizadas = 0
//Enquanto houver atividades na lista de urgentes, não faça retiradas da lista de normais. 

while(realizadas < limiteAtividades && (tarefasUrgentes.length>0 || tarefasNormais.length>0)){
    let atividadeFeita //valor undefined

    //SE a lista de urgentes tiver atividades
    if(tarefasUrgentes.length>0){
        atividadeFeita = tarefasUrgentes.pop() //retirar da pilha, ultima a entrar, primeira a sair
    }
    //zerada a lista de urgentes, retirar da fila normais SE tiver atividades
    else{
        atividadeFeita = tarefasNormais.shift() //retirar da fila, primeira a entrar, primeira a sair
    }

    realizadas++ //atualização da variável de controle
}

console.log(tarefasNormais)
console.log(tarefasUrgentes)
console.log(`Atividades realizadas: ${realizadas}`)

