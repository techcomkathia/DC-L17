//Uma empresa de consultoria precisa da lista de funcionários que tenham CNH
//Para um array de objetos, mostre no console apenas os nomes dos funcionários que tenham CNH como propriedade

let funcionarios = [
    {nome: 'João', idade: 25, cnh: true},
    {nome: 'Maria', idade: 30},
    {nome: 'Pedro', idade: 35},
    {nome: 'Ana', idade: 40},
    {nome: 'Carlos', idade: 45, cnh: true},
    {nome: 'Luisa', idade: 50, cnh: true}
]

for(let i = 0; i < funcionarios.length; i++){
   if((Object.keys(funcionarios[i]).includes('cnh'))) {
    console.log(funcionarios[i].nome)
   }
}

let pessoa =  {nome: 'João', idade: 25, cnh: true}

//mostrar as informações de um objeto utilizando o loop
for(x in pessoa){
    console.log(`${x}: ${pessoa[x]}`) 

}