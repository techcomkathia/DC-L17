let pessoasAprovadas = [ 'Ana', 'Beatriz', 'Catarina', 'Daniela', 'João', 'Paulo', 'Carlos', 'Joaquim', 'Ana', 'João' ]

//vamos verificar se o josé foi aprovado:
console.log(pessoasAprovadas.includes('José')) //false
console.log(pessoasAprovadas.includes('Ana')) //true

// o josé não está na lista, mas podemos usar o método indexOf
console.log(pessoasAprovadas.indexOf('José')) //-1
console.log(pessoasAprovadas.indexOf('Ana')) //0


