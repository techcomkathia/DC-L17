/*A04-Q20
Fácil
Peça ao usuário que digite 10 valores e mostre a soma deles.*/

let soma = 0;
for (let indice = 1; indice <=10 ; indice++) {
  soma += Number(prompt("Valor " + indice + ":"));
}
alert("Soma: " + soma);